import React, { ReactNode } from 'react';
import styled from 'styled-components';

// スタイリングされたボタンの定義
const SSubmit = styled.button`
  text-decoration: none;
  list-style: none;
  border: none;
  width: 50%;
  height: 40px;
  background-color: #ed6103;
  border-radius: 30px;
  color: #fff;
  display: flex;
  max-width: 150px;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

// コンポーネントのプロパティの型定義
interface SubmitButtonProps {
  children: ReactNode;
  onClick?: () => void; // クリックイベントのハンドラ
  // 他の必要なプロパティがあればここに追加
}

// SubmitButton コンポーネントの実装
const SubmitButton: React.FC<SubmitButtonProps> = ({ children, ...props }) => {
  return <SSubmit {...props}>{children}</SSubmit>;
};

export default SubmitButton;
