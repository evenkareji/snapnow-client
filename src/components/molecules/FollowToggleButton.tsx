import React from 'react';
import { User } from '../../types';
import { FollowButton } from '../atoms/FollowButton';
import { FollowingButton } from '../atoms/FollowingButton';

export const FollowToggleButton: React.FC<{
  loginUser: User | null;
  otherUserId: string;
  onClickFollow: () => void;
  onClickUnFollow: () => void;
  fontSize?: string;
  width?: string;
  height?: string;
}> = React.memo(
  ({
    loginUser,
    otherUserId,
    onClickFollow,
    onClickUnFollow,
    ...styleProps
  }) => {
    if (!loginUser || loginUser._id === otherUserId) return null;

    const isFollowing = loginUser.followings?.includes(otherUserId);

    return isFollowing ? (
      <FollowingButton onClickUnFollow={onClickUnFollow} {...styleProps}>
        フォロー中
      </FollowingButton>
    ) : (
      <FollowButton onClickFollow={onClickFollow} {...styleProps}>
        フォロー
      </FollowButton>
    );
  },
);
