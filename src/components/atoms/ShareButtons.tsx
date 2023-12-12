import styled from '@emotion/styled';
import React from 'react';
import {
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  LineIcon,
  TwitterIcon,
  EmailIcon,
} from 'react-share';

const ShareButtons = ({ url, quote }) => {
  return (
    <SShareInner>
      <SIconWrapper>
        <FacebookShareButton url={url} title={quote}>
          <FacebookIcon size={42} round />
        </FacebookShareButton>
        <SIconLabel>Facebook</SIconLabel>
      </SIconWrapper>

      <SIconWrapper>
        <TwitterShareButton url={url} title={quote}>
          <TwitterIcon size={42} round />
        </TwitterShareButton>
        <SIconLabel>Twitter</SIconLabel>
      </SIconWrapper>

      <SIconWrapper>
        <LineShareButton url={url} title={quote}>
          <LineIcon size={42} round />
        </LineShareButton>
        <SIconLabel>LINE</SIconLabel>
      </SIconWrapper>

      <SIconWrapper>
        <EmailShareButton url={url} title={quote}>
          <EmailIcon size={42} round />
        </EmailShareButton>
        <SIconLabel>Email</SIconLabel>
      </SIconWrapper>
    </SShareInner>
  );
};

const SShareInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SIconLabel = styled.div`
  font-size: 12px;
  margin-top: 5px;
`;

export default ShareButtons;
