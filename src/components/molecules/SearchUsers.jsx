import React from 'react';
import styled from 'styled-components';

import { SearchForm } from '../atoms/SerachForm';

export const SearchUsers = () => {
  return (
    <SearchContainer>
      <SearchForm placeholder="検索" />
    </SearchContainer>
  );
};
const SearchContainer = styled.div`
  margin: 0 auto;
  width: 92%;
  position: relative;
  max-width: 680px;
  margin-bottom: 25px;
`;
