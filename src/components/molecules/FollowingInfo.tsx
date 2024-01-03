import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { UserIconImg } from '../atoms/UserIconImg';

export const FollowingInfo = ({ following }) => {
  console.log(following.username);

  return (
    <UserBorder key={following._id}>
      <Link href={`/profile/${following.username}`}>
        <SFollowImg src={following.profileImg} />
      </Link>
      <SFollowContainer>
        <SFollowName>{following.username}</SFollowName>
        <SFollowDesc></SFollowDesc>
      </SFollowContainer>
      {/* <SOnFollowButton>押せません</SOnFollowButton> */}
    </UserBorder>
  );
};
const UserBorder = styled.div`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const SFollowImg = styled(UserIconImg)`
  margin-right: 13px;
  width: 61;
  height: 61;
  text-align: left;
  @media (min-width: 425px) {
    & {
      width: 71;
      height: 71;
    }
  }
`;
const SFollowContainer = styled.dl`
  flex: 0.9;
`;
const SFollowName = styled.dt`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: -5px;
`;
const SFollowDesc = styled.dd`
  font-size: 16px;
  color: #8f8f8f;
`;
