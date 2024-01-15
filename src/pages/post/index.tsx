import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import RingLoader from 'react-spinners/RingLoader';
import styled from 'styled-components';
import { TextArea } from '../../components/atoms/TextArea';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { fetchInitialUser } from '../../features/userSlice';
import { AppDispatch, useSelector } from '../../redux/store';
import SendIcon from '@mui/icons-material/Send';
import { useAddPost } from '../../hooks/useAddPost';
import { PulseLoader } from 'react-spinners';
import { useForm } from 'react-hook-form';
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
  const dispatch: AppDispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchInitialUser());
  }, []);
  useEffect(() => {
    if (!user && !loading) {
      router.push('/login');
    }
  }, [user]);
  const handleAddPost = ({ desc }) => AddPost(desc);
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
  if (loading) {
    return (
      <div className="loader-container">
        <RingLoader color="#ed6103" loading={true} size={50} />{' '}
      </div>
    );
  }
  return (
    <SOverlay onClick={handleOverlayClick}>
      <SPostBox onClick={handlePostBoxClick}>
        <SPostInner>
          <SPostHeader>
            <SArrowBox onClick={handleOverlayClick}>
              <ArrowBackIosIcon />
            </SArrowBox>
          </SPostHeader>
          <SPostMain>
            <SLabel htmlFor="textForm">
              <SForm method="post" onSubmit={handleSubmit(handleAddPost)}>
                <TextArea
                  {...register('desc')}
                  onChange={(e) => {
                    textLimit(e);
                    setValue('desc', e.target.value);
                  }}
                  placeholder="50文字以内で入力してください"
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
                <SPostButton
                  type="submit"
                  isText={isText}
                  disabled={isLoadingSubmission}
                >
                  {isLoadingSubmission ? (
                    <PulseLoader color="#fff" size={5} />
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
  cursor: pointer;
  margin-left: auto;
  position: relative;
  z-index: 1000000;
  &:hover {
    opacity: 0.7;
  }
`;
export default AddPost;
