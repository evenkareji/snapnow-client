import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { BaseInput } from '../../../components/atoms/BaseInput';
import PrimaryBtn from '../../../components/atoms/PrimaryBtn';
import { AppDispatch, useSelector } from '../../../redux/store';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { UserIconImg } from '../../../components/atoms/UserIconImg';
import { fetchInitialUser } from '../../../features/userSlice';
import { updateProfileValidationSchema } from '../../../utils/validationSchema';
import ProfileHeader from '../../../components/molecules/ProfileHeader';
import ArrowBackIosIconStyled from '../../../components/atoms/ArrowBackIcon';

const UpdateProfilePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateProfileValidationSchema),
  });
  const { user, loading } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchInitialUser());
  }, []);
  useEffect(() => {
    if (!user && !loading) {
      router.push('/login');
    }
  }, [user]);
  useEffect(() => {
    if (user) {
      setValue('username', user.username); // ユーザー名の設定
      setValue('description', user.desc); // 自己紹介の設定
    } else if (!loading) {
      router.push('/login');
    }
  }, [user, loading, setValue]);

  if (loading) {
    return (
      <div className="loader-container">
        <ClipLoader color="#ed6103" loading={true} size={50} />
      </div>
    );
  }
  if (!user) {
    return null;
  }

  const updateProfile = async ({ username, description }) => {
    try {
      const newProfile: {
        userId: string;
        username?: string;
        desc?: string;
      } = {
        userId: user._id,
        username: username,
        desc: description,
      };
      await axios.put(`/api/users/${user._id}`, newProfile);
      router.push(`/profile/${username}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <ProfileHeader
        title={'プロフィール編集'}
        leftIcon={<ArrowBackIosIconStyled onClick={() => router.back()} />}
        rightIcon
      />
      <SForm onSubmit={handleSubmit(updateProfile)}>
        <SHeadingForm>プロフィールを編集</SHeadingForm>
        <SProfileImg src={user.profileImg} alt="" />
        <SInputBox>
          <label htmlFor="username">名前</label>
          <SUpdateUserInput
            id="username"
            type="text"
            {...register('username')}
            placeholder="名前"
          />
          <p style={{ marginBottom: '14px', color: 'red' }}>
            {errors.username?.message as React.ReactNode}{' '}
          </p>
        </SInputBox>
        <SInputBox>
          <label htmlFor="description">自己紹介</label>
          <SUpdateUserInput
            type="text"
            {...register('description')}
            placeholder="自己紹介"
            id="description"
          />
          <p style={{ marginBottom: '14px', color: 'red' }}>
            {errors.description?.message as React.ReactNode}{' '}
          </p>
        </SInputBox>
        <SSaveProfileBtn>保存</SSaveProfileBtn>
      </SForm>
    </>
  );
};
const SForm = styled.form`
  width: 93%;
  margin: 0 auto;
  padding-top: 35px;
`;
const SHeadingForm = styled.h2`
  margin: 0 auto 35px;
  font-size: 24px;
  font-weight: normal;
  width: 100%;
  max-width: 400px;
`;
const SProfileImg = styled(UserIconImg)`
  cursor: pointer;
  width: 160px;
  height: 160px;
  margin: 0 auto 39px;

  @media (min-width: 425px) {
    & {
      width: 180px;
      height: 180px;
    }
  }
`;
const SInputBox = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  margin-bottom: 21px;
`;
const SUpdateUserInput = styled(BaseInput)`
  margin: 0 auto;
  width: 100%;
  max-width: 480px;
`;

const SSaveProfileBtn = styled(PrimaryBtn)`
  width: 100%;
  border-radius: 8px;
  max-width: 400px;
  height: 48px;
  display: block;
  margin: 100px auto 0px;
`;

export default UpdateProfilePage;
