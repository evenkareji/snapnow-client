import React, { useState, createRef } from 'react';
import styled from 'styled-components';

import { Home } from '../molecules/Home';
import { UserProfileIcon } from '../molecules/UserProfileIcon';
import { AddPostIcon } from '../molecules/AddPostIcon';

export const Footer = () => {
  const [isHomeIcon, setIsHomeIcon] = useState(true);
  const [isAddIcon, setIsAddIcon] = useState(true);
  const [isProfileIcon, setIsProfileIcon] = useState(true);

  // const footerRef = createRef();
  // const divClientWidth = footerRef.current?.clientWidth;
  // console.log(divClientWidth);

  return (
    <SFooter>
      {/* ホーム */}
      <Home isIcon={isHomeIcon} />
      {/* addpost */}
      <AddPostIcon isIcon={isAddIcon} />
      {/* プロフィール */}
      <UserProfileIcon isIcon={isProfileIcon} />
    </SFooter>
  );
};

const SFooter = styled.footer`
  height: 49px;

  position: fixed;
  top: auto;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 1000000;
  background-color: rgb(207, 175, 175);
  width: 100%;
  justify-content: space-around;
  border-top: 1px solid #dbdbdb;

  @media (min-width: 468px) {
    /* @media (min-width: 768px) { */
    width: 20vw;
    top: 0;
    bottom: auto;
    right: auto;
    padding: 30px 20px; /* Adjust padding as needed */
    justify-content: start;
    height: 100vh; /* Set height to 100% of viewport height */
    flex-direction: column;

    align-items: center; /* Adjust alignment as needed */
  }

  @media (min-width: 1264px) {
    align-items: start;
  }
`;
