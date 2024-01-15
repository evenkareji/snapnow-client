import DeleteIcon from '@mui/icons-material/Delete';
import styled from '@emotion/styled';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { useRouter } from 'next/router';
const PostPopup = ({ onDelete, post }) => {
  const [showShareButtons, setShowShareButtons] = useState(false);

  const router = useRouter();
  const handleShareClick = () => {
    setShowShareButtons(!showShareButtons);
  };

  const handleCloseShareButtons = () => {
    setShowShareButtons(false);
  };

  return (
    <>
      <MoreHorizIcon style={{ cursor: 'pointer' }} onClick={handleShareClick} />
      <Overlay show={showShareButtons} onClick={handleCloseShareButtons} />
      <ShareButtonsContainer show={showShareButtons}>
        <SharedContentWrapper>
          <SharedContent>
            <SPopupList
              onClick={() => onDelete(post?._id)}
              style={{ color: 'red' }}
            >
              <DeleteIcon />
              <span style={{ fontWeight: 'bold' }}>削除</span>
            </SPopupList>
            <SPopupList
              onClick={() =>
                router.push(`/post/${post?._id}/edit?postDesc=${post.desc}`)
              }
            >
              <EditIcon />
              <span>編集</span>
            </SPopupList>
          </SharedContent>
        </SharedContentWrapper>
      </ShareButtonsContainer>
    </>
  );
};

const Overlay = styled.div<{ show: boolean }>`
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;
  height: ${({ show }) => (show ? '100%' : '0')};
  background: rgba(0, 0, 0, 0.5);
  display: ${({ show }) => (show ? 'block' : 'none')};
  z-index: 100;
`;

const ShareButtonsContainer = styled.div<{ show: boolean }>`
  position: fixed;
  bottom: ${({ show }) => (show ? '0' : '-100%')};
  left: 0;
  width: 100%;
  height: 30vh;
  background-color: #fff;
  transition: bottom 0.2s ease-in-out;
  z-index: 2000000; /* Ensure it's above the overlay */
  border-radius: 8px;
`;
const SPopupList = styled.div`
  width: 100%;
  cursor: pointer;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  hover: {
    background-color: #dbdbdb;
  }
`;
const SharedContentWrapper = styled.div`
  width: 92%;
  margin: 0 auto;
  text-align: left;
`;

const SharedContent = styled.div`
  padding: 20px;
`;

export default PostPopup;
