import IconButton from '@mui/material/IconButton';
import React, { FC, ReactNode, memo } from 'react';
import styled from 'styled-components';
import { BaseBtn } from './BaseBtn';

type Props = {
  children: ReactNode;
  onClickUnFollow: () => void;
};
export const FollowingButton: FC<Props> = memo((props) => {
  console.log('%cChild render　OnFollowBtn', 'color:blue');
  const { children, onClickUnFollow } = props;
  return (
    <IconButton style={{ padding: '0px' }} onClick={onClickUnFollow}>
      <SOnFollowBtn>{children}</SOnFollowBtn>
    </IconButton>
  );
});
const SOnFollowBtn = styled(BaseBtn)`
  width: 100%;
  font-size: 12px;
  font-weight: bold;

  padding: 6px 15px 5px 17px;

  border-radius: 8px;
  border: none;

  color: #686565;
  border: 1px solid #8b8080;
  &:hover {
    background: #ffffff;
    opacity: 0.8;
  }
`;
