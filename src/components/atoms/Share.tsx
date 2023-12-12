// Share.js
import ShareIcon from '@mui/icons-material/Share';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import ShareButtons from './ShareButtons';
import CloseIcon from '@mui/icons-material/Close';

const Share = ({ username }) => {
  const [showShareButtons, setShowShareButtons] = useState(false);
  const URL = `${process.env.NEXT_PUBLIC_CLIENT_URL}/profile/${username}`;
  const QUOTE = 'この人をみてくれ！';

  const handleShareClick = () => {
    setShowShareButtons(!showShareButtons);
  };

  const handleCloseShareButtons = () => {
    setShowShareButtons(false);
  };

  return (
    <>
      <ShareIconStyled onClick={handleShareClick} />
      <Overlay show={showShareButtons} onClick={handleCloseShareButtons} />
      <ShareButtonsContainer show={showShareButtons}>
        <SharedContentWrapper>
          <SharedContent>
            <ShareHeader>
              <div>共有</div>
              <CloseIconStyled
                style={{ color: 'rgba(0, 0, 0, 0.7)' }}
                onClick={handleCloseShareButtons}
              />
            </ShareHeader>
            <ShareButtons url={URL} quote={QUOTE} />
          </SharedContent>
        </SharedContentWrapper>
      </ShareButtonsContainer>
    </>
  );
};

const ShareIconStyled = styled(ShareIcon)`
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const Overlay = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ show }) => (show ? '100%' : '0')};
  background: rgba(0, 0, 0, 0.5);
  display: ${({ show }) => (show ? 'block' : 'none')};
  z-index: 1;
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

const SharedContentWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: left;
`;

const SharedContent = styled.div`
  padding: 20px;
`;

const ShareHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CloseIconStyled = styled(CloseIcon)`
  cursor: pointer;
`;

export default Share;
