import React, { useCallback } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { UserIconImg } from '../atoms/UserIconImg';
import { FollowToggleButton } from './FollowToggleButton';
import { useSelector } from '../../redux/store';
import { useFollow } from '../../hooks/useFollow';
import { useUnFollow } from '../../hooks/useUnFollow';

export const UserListItem = ({ user }) => {
  const { user: loginUser } = useSelector((state) => state.user);

  const { followUser } = useFollow();
  const { unFollowUser } = useUnFollow();

  const onClickFollow = useCallback(
    () => followUser(user._id, loginUser?._id),
    [user._id, loginUser?._id, followUser],
  );
  const onClickUnFollow = useCallback(
    () => unFollowUser(user._id, loginUser?._id),
    [user._id, loginUser?._id, unFollowUser],
  );
  if (!loginUser || !user) return;

  return (
    <UserBorder key={user._id}>
      <Link href={`/profile/${user.username}`}>
        <SUserImg src={user.profileImg} />
      </Link>
      <Box>
        <SUserName>{user.username}</SUserName>
      </Box>
      <FollowToggleButton
        loginUser={loginUser}
        onClickFollow={onClickFollow}
        onClickUnFollow={onClickUnFollow}
        otherUserId={user._id}
      />
    </UserBorder>
  );
};

const UserBorder = styled.div`
  width: 100%;
  max-width: 680px;
  margin: 0 auto 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

const SUserImg = styled(UserIconImg)`
  cursor: pointer;
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

const SUserName = styled.div`
  font-weight: bold;
  font-size: 14px;
`;
const Box = styled.div`
  margin-left: 0px;
  flex: 1;
`;
