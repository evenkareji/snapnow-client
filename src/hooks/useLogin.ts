import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { AppDispatch } from '../redux/store';
import { SignInData } from '../types';

export const useLogin = () => {
  const dispatch: AppDispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const loginSubmit = async (data: Readonly<SignInData>) => {
    const { email, password } = data;
    setIsError(false);
    setLoginLoading(true);
    try {
      await dispatch(login({ email, password })).unwrap();
      setLoginLoading(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setLoginLoading(false);
    }
  };
  return {
    loginSubmit,
    isError,
    loginLoading,
  };
};
