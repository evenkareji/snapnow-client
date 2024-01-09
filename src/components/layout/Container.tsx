import styled from '@emotion/styled';
import React from 'react';

const Container = ({ children }) => {
  return <SContainer>{children}</SContainer>;
};
const SContainer = styled.div`
  margin: 0 auto;
  width: 92%;
  position: relative;
`;

export default Container;
