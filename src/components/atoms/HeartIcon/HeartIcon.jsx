import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
// import './HeartIcon.css';

export const HeartIcon = ({ isGood }) => {
  return (
    <HeartClick isGood={isGood}>
      <i className="material-icons heart">favorite</i>
    </HeartClick>
  );
};

export const HeartClick = styled.div`
  animation: ${({ isGood }) =>
    isGood
      ? css`
          ${heart} 1.2s forwards cubic-bezier(0.19, 1, 0.22, 1)
        `
      : css`
          ${unheart} 1.2s forwards cubic-bezier(0.19, 1, 0.22, 1)
        `};
`;

const heart = keyframes`
   0% {
    transform: scale(0) rotate(0);
  }

  50% {
    transform: scale(1) rotate(0) ease;
    background: linear-gradient(90deg, #ff0011, #ff000d 30%, hsl(0, 95%, 56%));
    background: -webkit-linear-gradient(90deg, #d6f700, #a2ff00 30%, #ffefd1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  55% {
    transform: scale(1.3) rotate(0deg) translateY(-50%);
    background: linear-gradient(90deg, #ff37c3, #ff00aa 100%, #ff1b6b);
    background: -webkit-linear-gradient(90deg, #ff37c3, #ff00aa 100%, #ff1b6b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  80% {
    transform: scale(1.3) rotate(0deg) translateY(-30%);
    background: linear-gradient(
      90deg,
      hsl(57, 100%, 81%),
      hsl(57, 97%, 45%),
      hsl(57, 100%, 84%)
    );
    background: -webkit-linear-gradient(
      90deg,
      hsl(57, 100%, 81%),
      hsl(57, 97%, 45%),
      hsl(57, 100%, 84%)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  90% {
    transform: scale(1.3) rotate(45deg) translateY(-10%);
    background: linear-gradient(90deg, #ff37c3, #ff00aa 100%, #ff1b6b);
    background: -webkit-linear-gradient(90deg, #ff37c3, #ff00aa 100%, #ff1b6b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  100% {
    transform: scale(1) rotate(0) translateY(0);
    color: #ff6702;
  }

`;
const unheart = keyframes`
0%{
  color:#ecaa25
  }
100%{
  color:#d2c4c4
  }
`;
