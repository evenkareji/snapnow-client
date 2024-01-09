import React from 'react';
import styled from 'styled-components';

export const SearchForm = ({
  placeholder,
  searchHandler,
  searchTerm,
  setSearchTerm,
  width = '100%',
  MarginBottom = '0px',
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
      width={width}
      MarginBottom={MarginBottom}
    />
  );
};
const SSearchForm = styled.input<{ width: string }>`
  padding-left: 25px;
  padding-right: 25px;
  /* width: 71%; */
  width: ${(props) => props.width};
  margin-bottom: ${(props) => props.MarginBottom};
  height: 34px;
  border-radius: 3px;
  background-color: #f0f0f0;
  border: none;
  outline: none;
`;
