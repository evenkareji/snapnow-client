// ProfileHeader.tsx
import React from 'react';
import styled from 'styled-components';

interface ProfileHeaderProps {
  title: string;
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
}

const SHeaderInner = styled.header`
  text-align: center;
  position: relative;
  width: 93%;
  margin-left: auto;
  margin-right: auto;
`;
const SHeader = styled.header`
  padding: 22px 0px 11px 0px;
`;
const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  title,
  leftIcon,
  rightIcon,
}) => {
  return (
    <SHeader>
      <SHeaderInner>
        {leftIcon}
        <h1 style={{ fontSize: '16px' }}>{title}</h1>
        {rightIcon}
      </SHeaderInner>
    </SHeader>
  );
};

export default ProfileHeader;
