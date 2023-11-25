import React, { useState } from 'react';
import styled from 'styled-components';

import { AddPostIcon } from '../molecules/AddPostIcon';
import { Home } from '../molecules/Home';
import { ProfileIcon } from '../molecules/UserProfileIcon';

export const FooterIcon = () => {
  const [isHomeIcon, setIsHomeIcon] = useState(false);
  const [isAddIcon, setIsAddIcon] = useState(false);
  const [isProfileIcon, setIsProfileIcon] = useState(false);

  return (
    <SFooter>
      {/* ホーム */}
      <Home />
      {/* addpost */}
      <AddPostIcon />
      {/* プロフィール */}
      <ProfileIcon />
    </SFooter>
  );
};

const SFooter = styled.footer`
  border-top: 1px solid #dbdbdb;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 425px) {
    & {
      background-color: rgb(255, 255, 255);
      justify-content: space-around;
    }
  }
`;
