// ProfileHeader.tsx
import React from 'react';
import styled from 'styled-components';

interface ProfileHeaderProps {
  title: string | React.ReactNode;
  leftIcon: React.ReactNode;
  rightIcon: string | React.ReactNode;
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
  align-items: center;
  box-sizing: border-box;

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
        {leftIcon}
        {renderedTitle}
        {rightIcon}
      </SHeaderInner>
    </SHeader>
  );
};

export default ProfileHeader;
