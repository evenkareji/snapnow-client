import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

// スタイリングされたボタンの定義
const SSubmit = styled.button`
  text-decoration: none;
  list-style: none;
  border: none;
  width: 100%;
  height: 50px;
  background-color: var(--accent-color);
  border-radius: 6px;
  color: #fff;
  display: flex;
  max-width: 400px;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

// SubmitButton コンポーネントの実装
const SubmitButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) => {
  return <SSubmit {...props}>{children}</SSubmit>;
};

export default SubmitButton;
