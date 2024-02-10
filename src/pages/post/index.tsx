import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { PulseLoader } from 'react-spinners';

import RingLoader from 'react-spinners/RingLoader';
import styled from 'styled-components';
import ArrowBackIosIconStyled from '../../components/atoms/ArrowBackIcon';
import { TextArea } from '../../components/atoms/TextArea';
import ProfileHeader from '../../components/molecules/ProfileHeader';
import Recorder from '../../components/organisms/Recorder';
import { useAddPost } from '../../hooks/useAddPost';
import { useAuthGuard } from '../../hooks/useAuthGuard';
import { useSelector } from '../../redux/store';
const AddPost = () => {
  const [isText, setIsText] = useState(false);
  const [isLoadingSubmission, setIsLoadingSubmission] =
    useState<boolean>(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const [headerState, setHeaderState] = useState('initial');
  const [file, setFile] = useState<Blob[]>([]);
  const audioRef = useRef<any>();
  const [isRecoded, setIsRecoded] = useState(false);

  const { register, handleSubmit, watch, setValue } = useForm();
  let descWatch = watch('desc', '');
  useEffect(() => {
    const maxText = 50;
    const textLength = descWatch.trim().length;
    setIsText(textLength > 0 && textLength <= maxText);
  }, [descWatch, setIsText]);
  const { AddPost } = useAddPost(setIsLoadingSubmission);
  const router = useRouter();

  const { loading } = useSelector((state) => state.user);
  useAuthGuard();
  const handleNextClick = () => {
    setIsShrunk(true);
  };

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

      chunks = []; // Ensure chunks is empty at the start of recording.
    });
    audioRef.current.addEventListener('stop', () => {
      console.log('録音を停止しました。');

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

  const uploadRecordedAudio = async () => {
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

      return response.data.url;
    } catch (error) {
      console.error('アップロードに失敗しました:', error);
    }
  };

  const handleAddPost = ({ desc }) => AddPost(desc, uploadRecordedAudio);

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
          position="fixed"
          title={headerState === 'initial' ? '音声タイトルを設定' : '録音'}
          leftIcon={
            <ArrowBackIosIconStyled
              onClick={
                headerState === 'initial'
                  ? () => router.back()
                  : () => {
                      setIsShrunk(false);
                      setHeaderState('initial');
                    }
              }
            />
          }
          rightIcon={
            headerState === 'initial' ? (
              <SNextButton
                style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  handleNextClick();
                  setHeaderState('next');
                }}
                isText={isText}
                disabled={!isText}
              >
                次へ
              </SNextButton>
            ) : (
              <SPostButton
                type="submit"
                isText={isText}
                disabled={isLoadingSubmission}
                form="applicationForm"
                isRecoded={isRecoded}
              >
                {isLoadingSubmission ? (
                  <PulseLoader color="#ed6103" size={5} />
                ) : (
                  '送信'
                )}
              </SPostButton>
            )
          }
        />
        <SPostInner isShrunk={isShrunk}>
          <SPostMain>
            <SLabel htmlFor="textForm">
              <SForm
                id="applicationForm"
                method="post"
                onSubmit={handleSubmit(handleAddPost)}
              >
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
              </SForm>
            </SLabel>
          </SPostMain>
        </SPostInner>
        <SAb isShrunk={isShrunk}>
          <Recorder
            setIsRecoded={setIsRecoded}
            file={file}
            audioRef={audioRef}
          />
        </SAb>
      </SPostBox>
    </SOverlay>
  );
};
const SNextButton = styled.button`
  all: unset;
  cursor: pointer;

  color: ${({ isText }) => (isText ? '#000' : '#c7c7c7')};
`;

const SAb = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${({ isShrunk }) => (isShrunk ? 'block' : 'none')};
`;

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
  transition: transform 0.1s;
  transform-origin: top left;
  transform: ${({ isShrunk }) => (isShrunk ? 'scale(0.5)' : 'scale(1)')};
  border: 1px solid ${({ isShrunk }) => (isShrunk ? '#dbdbdb' : 'none')};
  pointer-events: ${({ isShrunk }) => (isShrunk ? 'none' : 'auto')};
  border-left: none;
  height: 70%;
  max-height: 700px;
  width: 92%;
  margin: 0 auto;
  padding: 20px 0px 46px;
  max-width: 500px;
  background-color: #fff;
`;

const SPostButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ isRecoded }) => (isRecoded ? '20px' : '16px')};
  color: ${({ isRecoded }) => (isRecoded ? 'var(--accent-color)' : '#dddddd')};
  font-weight: ${({ isRecoded }) => (isRecoded ? 'bold' : 'normal')};

  cursor: pointer;

  position: relative;
  z-index: 1000000;
  &:hover {
    opacity: 0.7;
  }
`;
export default AddPost;
