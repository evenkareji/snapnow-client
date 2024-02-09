// Recorder.js
import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import MicNoneIcon from '@mui/icons-material/MicNone';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import styled from '@emotion/styled';
const Recorder = ({ audioRef, file, setIsRecoded }) => {
  const [isRecoding, setIsRecoding] = useState(false);
  // 録音開始
  const handleStart = () => {
    audioRef.current.start();
    setIsRecoding(true);
  };

  // 録音停止
  const handleStop = () => {
    audioRef.current.stop();
    setIsRecoding(false);
    setIsRecoded(true);
  };

  return (
    <>
      <SMicContainer>
        <SButtonBorder
          onClick={isRecoding ? () => handleStop() : () => handleStart()}
        >
          {isRecoding ? (
            <StopCircleIcon
              style={{
                width: '91px',
                height: '91px',
                padding: '10px',
                background: 'white',
                color: 'var(--accent-color)',
                borderRadius: '100%',
              }}
            />
          ) : (
            <MicNoneIcon
              style={{
                width: '70px', // サイズを小さく調整
                height: '70px', // サイズを小さく調整
                padding: '10px',
                background: 'var(--accent-color)',
                color: 'white',
                borderRadius: '100%',
              }}
            />
          )}
        </SButtonBorder>
        {file.length > 0 && (
          <ReactAudioPlayer
            src={URL.createObjectURL(new Blob(file))}
            controls
          />
        )}
      </SMicContainer>
    </>
  );
};
const SMicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
const SButtonBorder = styled.button`
  all: unset; /* ブラウザのデフォルトスタイルを全て解除 */
  cursor: pointer; /* ホバー時のカーソルをポインターに設定 */
  width: 90px;
  height: 90px;
  border-radius: 100%;
  display: inline-block; /* ブロック要素として表示 */
  border: 1px solid #b7b5b2;
  display: flex;
  justify-content: center; // 水平方向の中央揃え
  align-items: center;
  background-color: #fff;
`;

export default Recorder;
