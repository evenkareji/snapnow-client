import styled from '@emotion/styled';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

const PrimaryBtn = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) => {
  return <SPrimaryBtn {...props}>{children}</SPrimaryBtn>;
};

const SPrimaryBtn = styled.button`
  background-color: #ff8d06;
  color: #fff;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;
export default PrimaryBtn;
