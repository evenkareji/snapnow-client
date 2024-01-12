import React, { useState } from 'react';
import styled from '@emotion/styled';

import { keyframes } from '@emotion/react';
// Styled components

// アニメーションキーフレームの定義
const keyframesSvgFilled = keyframes`
  0% {
    transform: scale(0);
  }
  25% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1);
    filter: brightness(1.5);
  }
`;

const keyframesSvgCelebrate = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    filter: brightness(1.5);
  }
  100% {
    transform: scale(1.4);
    opacity: 0;
  }
`;

const HeartContainer = styled.div`
  --heart-color: rgb(255, 91, 137);
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  transition: 0.3s;
`;

const Checkbox = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 20;
  cursor: pointer;
`;

const SvgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Svg = styled.svg`
  fill: var(--heart-color);
  position: absolute;
`;

const SvgFilled = styled(Svg)`
  animation: ${keyframesSvgFilled} 1s;
  display: none;
`;

const SvgCelebrate = styled(Svg)`
  animation: ${keyframesSvgCelebrate} 0.5s forwards;
  stroke-width: 2px;
  display: none;
`;
const SvgOutline = styled.svg`
  fill: var(--heart-color);
  position: absolute;
`;

// React component
const LikeButton = ({ size = 50 }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  console.log(isChecked);
  return (
    <HeartContainer size={size} title="Like">
      <Checkbox
        type="checkbox"
        className="checkbox"
        id="Give-It-An-Id"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <SvgContainer>
        <SvgOutline
          viewBox="0 0 24 24"
          className="svg-outline"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Path for svg-outline */}
          <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
        </SvgOutline>
        <SvgFilled
          className="svg-filled"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: isChecked ? 'block' : 'none' }}
        >
          {/* Path for svg-filled */}
          {/* Same path as SvgOutline */}
        </SvgFilled>
        <SvgCelebrate
          className="svg-celebrate"
          width="100"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: isChecked ? 'block' : 'none' }}
        >
          {/* Polygons for svg-celebrate */}
          {/* ... */}
        </SvgCelebrate>
      </SvgContainer>
    </HeartContainer>
  );
};

export default LikeButton;
