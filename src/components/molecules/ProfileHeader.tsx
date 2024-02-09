// ProfileHeader.tsx
import React from 'react';
import styled from 'styled-components';

interface ProfileHeaderProps {
  title: string | React.ReactNode;
  leftIcon: React.ReactNode;
  rightIcon: string | React.ReactNode;
}

const SHeaderInner = styled.div`
  display: flex;
  justify-content: center; // 水平方向の中央揃え
  align-items: center;
  position: relative;
  width: 93%;
  height: 22px;
  margin-left: auto;
  margin-right: auto;
`;
const SHeader = styled.header`
  padding: 22px 0px 11px 0px;
  align-items: center;
  box-sizing: border-box;
  /* z-index: 9999999999; */
  border-bottom: ${({ borderBottom }) => borderBottom || '1px solid #f2f2f2'};
`;
const ProfileHeader: React.FC<
  ProfileHeaderProps & { borderBottom?: string }
> = ({ title, leftIcon, rightIcon, borderBottom }) => {
  const renderedTitle =
    typeof title === 'string' ? (
      <h1 style={{ fontSize: '16px' }}>{title}</h1>
    ) : (
      title
    );

  return (
    <SHeader borderBottom={borderBottom}>
      <SHeaderInner>
        <SHeaderLeftIcon>{leftIcon}</SHeaderLeftIcon>
        {renderedTitle}
        <SHeaderRightIcon>{rightIcon}</SHeaderRightIcon>
      </SHeaderInner>
    </SHeader>
  );
};
const SHeaderLeftIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
const SHeaderRightIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
`;
export default ProfileHeader;
