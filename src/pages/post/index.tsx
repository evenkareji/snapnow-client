import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { PulseLoader } from 'react-spinners';

import ReactAudioPlayer from 'react-audio-player';
import RingLoader from 'react-spinners/RingLoader';
import styled from 'styled-components';
import { TextArea } from '../../components/atoms/TextArea';
import ProfileHeader from '../../components/molecules/ProfileHeader';
import { useAddPost } from '../../hooks/useAddPost';
import { useAuthGuard } from '../../hooks/useAuthGuard';
import { useSelector } from '../../redux/store';
const AddPost = () => {
  const [isText, setIsText] = useState(false);
  const [isLoadingSubmission, setIsLoadingSubmission] =
    useState<boolean>(false);

  const { register, handleSubmit, watch, setValue } = useForm();
  let descWatch = watch('desc', '');
  useEffect(() => {
    const maxText = 50;
    const textLength = descWatch.trim().length;
    setIsText(textLength > 0 && textLength <= maxText);
  }, [descWatch, setIsText]);
  const { AddPost } = useAddPost(setIsLoadingSubmission);
  const router = useRouter();

  const { user, loading } = useSelector((state) => state.user);
  useAuthGuard();

  const textLimit = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const maxText = 50;
    const textLength = e.target.value.trim().length;
    setIsText(textLength > 0 && textLength <= maxText);
  };
  const handleOverlayClick = () => {
    router.back();
  };
  const handlePostBoxClick = (event) => {
    event.stopPropagation();
  };

  const [file, setFile] = useState<Blob[]>([]);
  const [audioState, setAudioState] = useState(true);
  const audioRef = useRef<any>();

  useEffect(() => {
    // マイクへのアクセス権を取得
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then(handleSuccess)
      .catch(handleError);
  }, []);

  const handleSuccess = (stream) => {
    audioRef.current = new MediaRecorder(stream);
    let chunks: Blob[] = [];
    audioRef.current.addEventListener('dataavailable', (event) => {
      console.log('データが利用可能です。');
      if (event.data.size > 0) {
        chunks.push(event.data);
        console.log('データがchunks配列に追加されました。', chunks);
      }
    });
    audioRef.current.addEventListener('start', () => {
      console.log('録音を開始しました。');
      setAudioState(false);
      chunks = []; // Ensure chunks is empty at the start of recording.
    });
    audioRef.current.addEventListener('stop', () => {
      console.log('録音を停止しました。');
      setAudioState(true);
      if (chunks.length > 0) {
        const audioBlob = new Blob(chunks, { type: 'audio/webm' });
        setFile([audioBlob]); // Set file state with new blob.
        console.log('録音が停止し、file配列が更新されました。', audioBlob);
      } else {
        console.log('録音が停止しましたが、chunks配列が空です。');
      }
      chunks = []; // Clear chunks after setting file.
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
  const Submit = async () => {
    if (file.length === 0) {
      console.log('録音データが file 配列に存在しません。');
      alert('録音がありません。');
      return;
    }

    const audioBlob = new Blob(file, { type: 'audio/webm' });
    const formData = new FormData();
    formData.append('audio', audioBlob);

    try {
      const response = await axios.post('api/upload/upload-audio', formData);
      // setAudioUrl(response.data.url as any);
      return response.data.url;
    } catch (error) {
      console.error('アップロードに失敗しました:', error);
    }
  };

  const handleAddPost = ({ desc }) => AddPost(desc, Submit);
  // const handleRemove = () => {
  //   setAudioState(true);
  //   setFile([]);
  // };

  const handleError = () => {
    alert('エラーです。');
  };

  if (loading) {
    return (
      <div className="loader-container">
        <RingLoader color="#ed6103" loading={true} size={50} />
      </div>
    );
  }
  return (
    <SOverlay onClick={handleOverlayClick}>
      <SPostBox onClick={handlePostBoxClick}>
        <ProfileHeader
          title={'音声タイトル'}
          leftIcon={<CloseIconStyled onClick={() => router.back()} />}
          rightIcon={<ArrowForwardIosIcon />}
        />
        <SPostInner>
          {/* <SPostHeader> */}
          {/* ArrowForwardIosIcon押したら、中身の内容を追加する 。既存のものは左上に置く*/}
          {/* </SPostHeader> */}
          <SPostMain>
            <SLabel htmlFor="textForm">
              <SForm method="post" onSubmit={handleSubmit(handleAddPost)}>
                <TextArea
                  {...register('desc')}
                  onChange={(e) => {
                    textLimit(e);
                    setValue('desc', e.target.value);
                  }}
                  placeholder="音声のタイトルを50文字以内で入力してください"
                  autoFocus={true}
                ></TextArea>
                <p
                  style={{
                    textAlign: 'right',
                    color: descWatch.length > 50 ? 'red' : '#080808',
                  }}
                >
                  {descWatch.length}/50
                </p>
                <div style={{ display: 'flex' }}>
                  <button type="button" onClick={handleStart}>
                    録音
                  </button>
                  <button
                    type="button"
                    onClick={handleStop}
                    disabled={audioState}
                  >
                    ストップ
                  </button>

                  {/* <button onClick={handleRemove}>削除</button> */}
                  <ReactAudioPlayer
                    src={
                      file.length > 0 ? URL.createObjectURL(new Blob(file)) : ''
                    }
                    controls
                  />
                </div>
                <SPostButton
                  type="submit"
                  isText={isText}
                  disabled={isLoadingSubmission}
                >
                  {isLoadingSubmission ? (
                    <PulseLoader color="#ed6103" size={5} />
                  ) : (
                    <SendIcon />
                  )}
                </SPostButton>
              </SForm>
            </SLabel>
          </SPostMain>
        </SPostInner>
      </SPostBox>
    </SOverlay>
  );
};
const SOverlay = styled.div`
  @media (min-width: 520px) {
    position: fixed;
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
  overflow: hidden;
`;
const SPostBox = styled.div`
  border-radius: 20px;
  max-width: 520px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  max-height: 700px;
  min-height: 600px;
  height: 70%;
`;
const SLabel = styled.label`
  display: block;
  width: 100%;
  background-color: #fff; /* padding: 32px 0 72px; */
`;
const SForm = styled.form`
  position: relative;
  z-index: 2;
`;
const SArrowBox = styled.div`
  cursor: pointer;
  color: #fff;
  padding-top: 8px;
  padding-left: 7px;
  width: 40px;
  height: 40px;
  background-color: hsla(0, 0%, 0%, 0.6);
  border-radius: 50%;
  position: relative;
  z-index: 20000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CloseIconStyled = styled(CloseIcon)`
  cursor: pointer;
`;
const SPostMain = styled.div`
  width: 100%;
  @media (max-width: 520px) {
    height: 90vh;
  }
  padding-top: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SPostInner = styled.div`
  height: 70%;
  max-height: 700px;
  width: 92%;
  margin: 0 auto;
  padding: 20px 0px 46px;
  max-width: 500px;
  background-color: #fff;
`;
const SPostHeader = styled.header`
  background-color: #fff;
`;
const SPostButton = styled.button`
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5); /* Adjust the alpha value as needed */
  color: #ff772a;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 16px;
  padding-top: 6px;
  display: block;
  align-items: center;
  cursor: pointer;
  margin-left: auto;
  position: relative;
  z-index: 1000000;
  &:hover {
    opacity: 0.7;
  }
`;
export default AddPost;
