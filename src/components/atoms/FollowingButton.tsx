import IconButton from '@mui/material/IconButton';
import React, { FC, ReactNode, memo } from 'react';
import styled from 'styled-components';
import { BaseBtn } from './BaseBtn';

type Props = {
  children: ReactNode;
  onClickUnFollow: () => void;
};
export const FollowingButton: FC<
  Props & { fontSize?: string; width?: string; height?: string }
> = memo((props) => {
  const { children, onClickUnFollow, fontSize, width, height } = props;
  return (
    <IconButton style={{ padding: '0px' }} onClick={onClickUnFollow}>
      <SOnFollowBtn fontSize={fontSize} width={width} height={height}>
        {children}
      </SOnFollowBtn>
    </IconButton>
  );
});
const SOnFollowBtn = styled(BaseBtn)`
  width: 100%;
  font-size: 12px;
  font-weight: bold;

  padding: 6px 15px 5px 17px;
  width: ${({ width }) => width || '100%'};
  font-size: ${({ fontSize }) => fontSize || '12px'};
  height: ${({ height }) => height || 'auto'};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;

  color: #000000;
  background: rgb(239, 239, 239);
  &:hover {
    opacity: 0.8;
  }
`;
