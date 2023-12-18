import styled from 'styled-components';

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 500px;
  font-size: 24px;
  resize: none;
  border: none;
  outline: none;
  height: 80%;

  min-height: 222px;
  &::placeholder {
    color: #ce936c;
  }
`;
