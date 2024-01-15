import IconButton from '@mui/material/IconButton';
import React, { FC, ReactNode, memo } from 'react';
import styled from 'styled-components';
import { BaseBtn } from './BaseBtn';

type Props = {
  children: ReactNode;
  onClickFollow: () => void;
};
export const FollowButton: FC<
  Props & { fontSize?: string; width?: string; height?: string }
> = memo((props) => {
  const { children, onClickFollow, fontSize, width, height } = props;

  console.log('FollowButton');

  return (
    <IconButton style={{ padding: '0px' }} onClick={onClickFollow}>
      <SUnFollowBtn
        className="unfollow-bg-color"
        fontSize={fontSize}
        width={width}
        height={height}
      >
        {children}
      </SUnFollowBtn>
    </IconButton>
  );
});

const SUnFollowBtn = styled(BaseBtn)`
  width: ${({ width }) => width || '100%'};
  font-size: ${({ fontSize }) => fontSize || '12px'};
  height: ${({ height }) => height || 'auto'};

  font-weight: bold;
  display: flex;
  justify-content: center; // This will center the text horizontally
  align-items: center;
  padding: 6px 15px 5px 17px;

  border-radius: 8px;
  background: #ff8d06;
  color: #fff;
  &:hover {
    background: #ff6702;
  }
`;
