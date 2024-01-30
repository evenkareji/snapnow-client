import React, { useEffect, useRef, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import axios from 'axios';

const Audio = () => {
  const [file, setFile] = useState([]);
  const [audioState, setAudioState] = useState(true);
  const audioRef = useRef();

  useEffect(() => {
    // マイクへのアクセス権を取得
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then(handleSuccess)
      .catch(handleError);
  }, []);

  const handleSuccess = (stream) => {
    // レコーディングのインスタンスを作成
    audioRef.current = new MediaRecorder(stream, {
      mimeType: 'video/webm;codecs=vp9',
    });
    // 音声データを貯める場所
    let chunks = [];
    // 録音が終わった後のデータをまとめる
    audioRef.current.addEventListener('dataavailable', (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
      // 音声データをセット
      setFile(chunks);
    });
    // 録音を開始したら状態を変える
    audioRef.current.addEventListener('start', () => setAudioState(false));
    // 録音がストップしたらchunkを空にして、録音状態を更新
    audioRef.current.addEventListener('stop', () => {
      setAudioState(true);
      chunks = [];
    });
  };

  // 録音開始
  const handleStart = () => {
    audioRef.current.start();
  };

  // 録音停止
  const handleStop = () => {
    audioRef.current.stop();
  };
  const handleSubmit = async () => {
    if (file.length === 0) {
      alert('録音がありません。');
      return;
    }

    const audioBlob = new Blob(file, { type: 'audio/webm' });
    const formData = new FormData();
    formData.append('audio', audioBlob);

    try {
      const response = await axios.post('api/upload/upload-audio', formData);

      console.log('アップロード完了！URL', response.data.url, 'url');
    } catch (error) {
      console.error('アップロードに失敗しました:', error);
    }
  };

  const handleRemove = () => {
    setAudioState(true);
    setFile([]);
  };

  const handleError = () => {
    alert('エラーです。');
  };

  return (
    <div>
      <button onClick={handleStart}>録音</button>
      <button onClick={handleStop} disabled={audioState}>
        ストップ
      </button>
      <button onClick={handleSubmit}>送信</button>
      <button onClick={handleRemove}>削除</button>
      <ReactAudioPlayer
        src={file.length > 0 ? URL.createObjectURL(new Blob(file)) : ''}
        controls
      />
    </div>
  );
};

export default Audio;
