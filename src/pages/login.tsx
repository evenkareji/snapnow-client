import Link from 'next/link';
import styled from 'styled-components';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { PulseLoader } from 'react-spinners';
import { BaseInput } from '../components/atoms/BaseInput';
import { ErrorMessage } from '../components/atoms/ErrorMessage';
import GoogleButton from '../components/atoms/GoogleBtn';
import LineWithText from '../components/atoms/LineWithText';
import PasswordInput from '../components/atoms/PasswordInput';
import SubmitButton from '../components/atoms/SubmitBtn';
import { useLogin } from '../hooks/useLogin';
import { useSelector } from '../redux/store';
import { SignInData } from '../types';
import { loginValidationSchema } from '../utils/validationSchema';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: zodResolver(loginValidationSchema),
  });
  const { loginSubmit, isError, loginLoading } = useLogin();
  const router = useRouter();
  const { user, loading } = useSelector((state) => state.user);

  const googleLogin = () => {
    window.open(
      'https://snapnow-server.onrender.com/auth/google/callback',
      '_self',
    );
    // window.open('/api/auth/google/callback', '_self');
    // window.open('http://localhost:8000/auth/google/callback', '_self');
  };

  // window.open(
  //   'https://snapnow-server.onrender.com/auth/google/callback',
  //   '_self',
  // );
  // window.open('http://localhost:8000/auth/google/callback', '_self');
  // 'https://snapnow-client.vercel.app/auth/google/callback',
  // '_self',

  if (user && !loading) {
    router.push('/');
  }

  return (
    <>
      <SLoginBack>
        <SLoginBorder>
          <SForm onSubmit={handleSubmit(loginSubmit)}>
            <SFormHead>Snapnow</SFormHead>
            <p>メールアドレス :fsf@gmail.com</p>
            <p>パスワード　　 :123456</p>
            <SEmail
              id="email"
              autoFocus={true}
              {...register('email')}
              email="email"
              placeholder="メールアドレス"
            />
            <PasswordInput
              placeholder="パスワード"
              register={{ ...register('password') }}
            />
            <Link href="/reset">
              <a style={{ textDecoration: 'none', color: '#6e7173' }}>
                パスワードを忘れた場合
              </a>
            </Link>
            <p style={{ marginBottom: '14px', color: 'red' }}>
              {errors.email?.message as React.ReactNode}{' '}
              {errors.password?.message as React.ReactNode}
            </p>
            {isError ? (
              <SErrorMessage style={{ opacity: '1' }}>
                メールアドレスかパスワードが間違っています
              </SErrorMessage>
            ) : (
              <SErrorMessage style={{ opacity: '0' }}>
                メールアドレスかパスワードが間違っています
              </SErrorMessage>
            )}
            <SubmitButton type="submit">
              {loginLoading ? (
                <PulseLoader color="#fff" size={5} />
              ) : (
                'ログイン'
              )}
            </SubmitButton>
            <LineWithText />
            <GoogleButton onClick={() => googleLogin()} />

            <STextFlex>
              <SAcountQuestion>アカウントをお持ちでないですか?</SAcountQuestion>
              <Link href="/register" style={{ textDecoration: 'none' }}>
                登録する
              </Link>
            </STextFlex>
          </SForm>
        </SLoginBorder>
      </SLoginBack>
    </>
  );
};

const SAcountQuestion = styled.p`
  @media (max-width: 432px) {
    font-size: 14px;
  }
  font-size: 16px;
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

  height: -webkit-fill-available;
  @supports (-webkit-touch-callout: none) {
    & {
      /* The hack for Safari */
      height: -webkit-fill-available;
    }
  }
  border-radius: 0px;
  position: relative;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 432px) {
    width: 60%;
    min-width: 394px;
    max-width: 640px;

    height: 80vh;
    border-radius: 16px;
  }
`;
const SForm = styled.form`
  width: 85%;
  /* height: 60vh; */
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 0px;
`;
const SFormHead = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 40px;
`;
const SEmail = styled(BaseInput)`
  margin-bottom: 14px;
`;

const STextFlex = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  a {
    color: #ed6103;
  }
`;

export default Login;
