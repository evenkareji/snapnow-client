import styled from 'styled-components';

export const TextArea = styled.textarea`
  @media (max-width: 425px) {
    & {
      font-size: 18px;
    }
  }

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
