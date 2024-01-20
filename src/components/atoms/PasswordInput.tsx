import styled from '@emotion/styled';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { BaseInput } from './BaseInput';
const PasswordInput = ({ register, ...props }) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };
  const InputContainer = styled.div`
    position: relative;
    max-width: 400px;
  `;

  const StyledBaseInput = styled(BaseInput)`
    padding-right: 40px;
    outline: ${({ isError }) => isError && '#ed0303 auto 2px'};
  `;

  const IconContainer = styled.div`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  `;

  return (
    <InputContainer>
      <StyledBaseInput
        id="password"
        type={passwordShown ? 'text' : 'password'}
        {...register}
        {...props}
      />
      <IconContainer onClick={togglePasswordVisiblity}>
        {passwordShown ? <VisibilityIcon /> : <VisibilityOffIcon />}
      </IconContainer>
    </InputContainer>
  );
};

export default PasswordInput;
