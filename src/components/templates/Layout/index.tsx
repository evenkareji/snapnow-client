import React, { ReactNode } from 'react';
import { Footer } from '../Footer';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <SFlex>
      <Footer />
      {children}
      {/* ボタンが押されたらここに投稿フォームをpopupする */}
    </SFlex>
  );
};
const SFlex = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
export default Layout;
