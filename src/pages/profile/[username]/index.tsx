import axios from 'axios';
import { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProfileCount } from '../../../components/molecules/ProfileCount';
import { UserPostList } from '../../../components/organisms/UserPostList';

import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import RingLoader from 'react-spinners/RingLoader';
import ArrowBackIosIconStyled from '../../../components/atoms/ArrowBackIcon';
import ProfileHeader from '../../../components/molecules/ProfileHeader';
import { UserIconWithName } from '../../../components/molecules/UserIconWithName';
import { FollowTab } from '../../../components/organisms/FollowTab';
import UserMenu from '../../../components/organisms/UserMenu';
import Layout from '../../../components/templates/Layout';
import { fetchInitialUser } from '../../../features/userSlice';
import { AppDispatch, useSelector } from '../../../redux/store';

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Share from '../../../components/atoms/Share';

export async function getServerSideProps(context) {
  const { username } = context.query;
  const response = await axios.get(
    `${process.env.API_URL}/users?username=${username}`,
  );

  return {
    props: { profileUser: response.data },
  };
}

const ProfilePage = ({ profileUser }) => {
  const router = useRouter();
  const [isToPage, setIsToPage] = useState<boolean>(false);
  const [isPointer, setIsPointer] = useState<boolean>(false);
  const [tabIndex, setTabIndex] = useState(0);

  const dispatch: AppDispatch = useDispatch();
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
    setIsToPage(false);
  }, [isPointer]);
  const { username } = router.query;

  useEffect(() => {
    setIsPointer(user?.username === username);
  }, [user, username]);

  const toFollowsPage = () => {
    if (user?.username !== username) return;
    setIsToPage((prev) => !prev);
  };
  const followings = profileUser?.followings || [];
  const followers = profileUser?.followers || [];
  const handleTabSelect = (index) => {
    setTabIndex(index); // タブのインデックスを更新
    if (index === 0) {
    } else if (index === 1) {
    }
  };
  if (loading) {
    return (
      <div className="loader-container">
        <RingLoader color="#ed6103" loading={true} size={50} />
      </div>
    );
  }

  return (
    <SProfileBox>
      <ProfileHeader
        title={isPointer ? 'プロフィール' : `${username}`}
        leftIcon={
          isPointer ? (
            ''
          ) : (
            <ArrowBackIosIconStyled onClick={() => router.back()} />
          )
        }
        rightIcon={
          isPointer ? (
            <UserMenu username={username} />
          ) : (
            <Share username={username} />
          )
        }
      />
      <SFollowTab
        isToPage={isToPage}
        toFollowsPage={toFollowsPage}
        style={{ position: 'absolute' }}
      />
      <SProfileInfo>
        <UserIconWithName profileUser={profileUser} />
        <SProfileFlex isPointer={isPointer}>
          <ProfileCount
            toFollowsPage={toFollowsPage}
            name="フォロー"
            count={followings.length}
          />
          <ProfileCount
            toFollowsPage={toFollowsPage}
            name="フォロワー"
            count={followers.length}
          />
        </SProfileFlex>
        <SIntroduction>{profileUser.desc}</SIntroduction>
      </SProfileInfo>
      <Tabs selectedIndex={tabIndex} onSelect={handleTabSelect}>
        <StyledTabList>
          <StyledTab>ポスト</StyledTab>
          <StyledTab>いいね</StyledTab>
        </StyledTabList>
        <StyledTabPanel>
          <UserPostList tabIndex={0} profileUser={profileUser} />
        </StyledTabPanel>
        <StyledTabPanel>
          <UserPostList tabIndex={1} profileUser={profileUser} />
        </StyledTabPanel>
      </Tabs>
    </SProfileBox>
  );
};
const StyledTabPanel = styled(TabPanel)`
  display: none;
  &.react-tabs__tab-panel--selected {
    display: block;
  }
`;
const StyledTabList = styled(TabList)`
  display: flex;

  padding: 0;
  list-style-type: none;
  z-index: 1000;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  border-top: 1px solid #f2f2f2;
  background-color: #fff;
  display: flex;
`;
const StyledTab = styled(Tab)`
  font-weight: bold;
  font-size: 16px;
  padding: 8px 12px;
  user-select: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: white; // テキストカラーを白に
  margin-right: 4px; // タブ間のマージンを設定
  outline: none; //
  // アクティブなタブのスタイル
  &.react-tabs__tab--selected {
    border-bottom: 3px solid #ff8d06; // 下線を白にして画像に合わせる
    color: #ff8d06; // アクティブなタブのテキストカラーを白に
  }

  // アクティブでないタブのスタイル
  &:not(.react-tabs__tab--selected) {
    border-bottom: none; // 非アクティブなタブの下線を削除
    color: #c9c9c9; // 非アクティブなタブのテキストカラーを薄い色に
    &:hover {
      color: #ff8d06; // ホバー時にテキストカラーを白に
      opacity: 0.5;
    }
  }
`;
const SFollowTab = styled(FollowTab)``;
const SProfileBox = styled.div`
  position: relative;
  width: 100vw;
  @media (min-width: 468px) {
    margin-left: 20vw;
    width: 80vw;
  }
  @media (min-width: 768px) {
    /* flex: 0.9; */
    margin-left: 20vw;
  }
  @media (min-width: 1264px) {
  }

  background-color: #fff;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
const SIntroduction = styled.div`
  padding: 30px 0px 0px;
  margin: 0 auto;
  width: 50%;
  max-width: 600px;
  text-align: center;
  font-size: 16px;
`;
const SProfileFlex = styled.div`
  width: 55%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  cursor: ${({ isPointer }) => (isPointer ? 'pointer' : 'not-allowed')};
`;
const SProfileInfo = styled.div`
  width: 100%;
  max-width: 432px;
  margin: 0 auto;
  padding: 43px 0;
`;

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default ProfilePage;
