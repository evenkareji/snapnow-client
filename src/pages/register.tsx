import Link from 'next/link';
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { zodResolver } from '@hookform/resolvers/zod';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { BaseInput } from '../components/atoms/BaseInput';
import { ErrorMessage } from '../components/atoms/ErrorMessage';
import PasswordInput from '../components/atoms/PasswordInput';
import { useRegister } from '../hooks/useRegister';
import { useSelector } from '../redux/store';
import { registerValidationSchema } from '../utils/validationSchema';
import SubmitButton from '../components/atoms/SubmitBtn';
import { PulseLoader } from 'react-spinners';
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: zodResolver(registerValidationSchema),
  });
  const router = useRouter();
  const { user, loading } = useSelector((state) => state.user);

  const { registerSubmit, emailExist, isError, registerLoading } =
    useRegister();

  useEffect(() => {
    if (user && !loading) {
      router.push('/');
    }
  }, [user]);

  return (
    <SLoginBack>
      <SLoginBorder>
        <SForm onSubmit={handleSubmit(registerSubmit)}>
          <SArrowBackIosNewIconBox href={'/login'}>
            <SArrowBackIosNewIcon />
          </SArrowBackIosNewIconBox>
          <SHead>新規登録</SHead>
          <SName
            type="text"
            placeholder="ユーザー名"
            autoComplete="username"
            {...register('username')}
          />
          <p style={{ marginBottom: '14px', color: 'red' }}>
            {errors.username?.message as React.ReactNode}
          </p>
          <SEmail
            type="email"
            placeholder="メールアドレス"
            {...register('email')}
            autoComplete="off"
          />
          <p style={{ marginBottom: '14px', color: 'red' }}>
            {errors.email?.message as React.ReactNode}
          </p>
          {emailExist ? (
            <SEmailExist style={{ display: 'block' }}>
              そのメールアドレスは使用されています
            </SEmailExist>
          ) : (
            <SEmailExist style={{ display: 'none' }}>
              そのメールアドレスは使用されています
            </SEmailExist>
          )}
          <PasswordInput
            placeholder="パスワード"
            register={{ ...register('password') }}
            autoComplete="off"
          />
          <p style={{ marginBottom: '14px', color: 'red' }}>
            {errors.password?.message as React.ReactNode}
          </p>

          <PasswordInput
            placeholder="確認用パスワード"
            register={{ ...register('passwordConfirmation') }}
            isError={isError}
            autoComplete="none"
          />
          <p style={{ marginBottom: '14px', color: 'red' }}>
            {errors.password?.message as React.ReactNode}
          </p>
          {isError ? (
            <SErrorMessage style={{ opacity: '1' }}>
              パスワードが一致しません
            </SErrorMessage>
          ) : (
            <SErrorMessage style={{ opacity: '0' }}>
              パスワードが一致しません
            </SErrorMessage>
          )}

          <SubmitButton type="submit">
            {registerLoading ? <PulseLoader color="#fff" size={5} /> : '登録'}
          </SubmitButton>
        </SForm>
      </SLoginBorder>
    </SLoginBack>
  );
};
const SEmailExist = styled.p`
  color: red;
  font-size: 15px;
  margin-top: -1px;
`;

const SArrowBackIosNewIconBox = styled(Link)`
  display: inline-block;

  height: 30px;
  width: 30px;
  position: absolute;
  top: 80px;
`;
const SArrowBackIosNewIcon = styled(ArrowBackIosNewIcon)`
  width: 92%;
  max-width: 680px;
  margin: 0 auto 20px;
  color: #9a9696;
`;
const SErrorMessage = styled(ErrorMessage)`
  color: red;
  margin-bottom: 38px;
`;
const SLoginBack = styled.div`
  background-color: #d9d9d9;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SLoginBorder = styled.div`
  width: 100%;
  height: 100vh;
  border-radius: 0px;

  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 432px) {
    width: 60%;
    min-width: 394px;
    max-width: 640px;

    height: 90vh;
    border-radius: 16px;
  }
`;
const SForm = styled.form`
  width: 85%;
  /* height: 60vh; */
  max-width: 400px;
  margin: 0 auto;
  padding: 30px 0px;
`;
const SHead = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 40px;
`;
const SName = styled(BaseInput)``;
const SEmail = styled(BaseInput)``;

export default Register;
