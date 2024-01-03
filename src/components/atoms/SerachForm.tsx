import React from 'react';
import styled from 'styled-components';

export const SearchForm = ({
  placeholder,
  searchHandler,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <SSearchForm
      type="text"
      placeholder={placeholder}
      onKeyUp={searchHandler}
      value={searchTerm}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
      }}
    />
  );
};
const SSearchForm = styled.input`
  padding-left: 25px;
  padding-right: 25px;
  width: 71%;
  height: 34px;
  border-radius: 3px;
  background-color: #f0f0f0;
  border: none;
  outline: none;
`;
