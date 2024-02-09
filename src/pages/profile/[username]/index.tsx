import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import axios from 'axios';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import RingLoader from 'react-spinners/RingLoader';
import styled from 'styled-components';
import ArrowBackIosIconStyled from '../../../components/atoms/ArrowBackIcon';
import { ProfileCount } from '../../../components/molecules/ProfileCount';
import ProfileHeader from '../../../components/molecules/ProfileHeader';
import { UserIconWithName } from '../../../components/molecules/UserIconWithName';
import { FollowTab } from '../../../components/organisms/FollowTab';
import UserMenu from '../../../components/organisms/UserMenu';
import { UserPostList } from '../../../components/organisms/UserPostList';
import Layout from '../../../components/templates/Layout';
import { useSelector } from '../../../redux/store';

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Share from '../../../components/atoms/Share';
import { FollowToggleButton } from '../../../components/molecules/FollowToggleButton';
import { useToggleFollow } from '../../../hooks/useToggleFollow';
import { useAuthGuard } from '../../../hooks/useAuthGuard';
import MenuTrigger from '../../../components/atoms/MenuTrigger';
import useToggle from '../../../hooks/useToggle';

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
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [isToggled, toggle] = useToggle() as [boolean, () => void];
  const { followUser, unFollowUser } = useToggleFollow();
  const { user, loading } = useSelector((state) => state.user);
  const { username } = router.query;

  useAuthGuard();

  useEffect(() => {
    setIsToPage(false);
  }, [isPointer]);

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
    setTabIndex(index);
    if (index === 0) {
    } else if (index === 1) {
    }
  };

  const toggleIntroduction = () => {
    setShowIntroduction((prev) => !prev);
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
      <UserMenu
        username={username}
        isToggled={isToggled}
        onClick={() => toggle()}
      />

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
            <MenuTrigger onClick={() => toggle()} />
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
        {!isPointer && (
          <SBox>
            <FollowToggleButton
              loginUser={user}
              otherUserId={profileUser._id}
              onClickFollow={() => followUser(profileUser._id, user?._id)}
              onClickUnFollow={() => unFollowUser(profileUser._id, user?._id)}
              width="171px"
              height="50px"
              fontSize="16px"
            />
            <SHiddenCheckbox
              id="toggleIcon"
              type="checkbox"
              onChange={toggleIntroduction}
            />
            <SLabel htmlFor="toggleIcon">
              <SArrowLeftIcon />
            </SLabel>
          </SBox>
        )}
        <SIntroduction isPointer={isPointer} show={showIntroduction}>
          {profileUser.desc}
        </SIntroduction>
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

const SBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  margin-top: 10px;
`;
const SIntroduction = styled.div`
  display: ${({ isPointer, show }) => (isPointer || show ? 'block' : 'none')};

  padding: 11px 0px 0px 0px;
  margin: 0 auto;
  width: 50%;
  max-width: 600px;
  text-align: center;
  font-size: 16px;
`;
const SHiddenCheckbox = styled.input`
  display: none;

  &:checked + label > svg {
    transform: rotate(-180deg);
  }

  &:checked ~ div {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0%);
    transition: transform 2s;
  }
`;

const SLabel = styled.label`
  width: 44px;
  height: 50px;
  background: #f1f1f2;
  font-size: 6px;
  cursor: pointer;
  color: #000;
  border-radius: 8px;
  display: flex;
  justify-content: center; // This will center the text horizontally
  align-items: center;
`;

const SArrowLeftIcon = styled(ArrowDropUpIcon)`
  color: #000;
  transition: transform 0.3s ease-in-out;
`;
const StyledTabPanel = styled(TabPanel)`
  position: relative;
  display: none;
  &.react-tabs__tab-panel--selected {
    display: block;
  }
`;
const StyledTabList = styled(TabList)`
  display: flex;
  margin-top: 0px;
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
  color: white;
  margin-right: 4px;
  outline: none;

  &.react-tabs__tab--selected {
    border-bottom: 3px solid #ff8d06;
    color: #ff8d06;
  }

  &:not(.react-tabs__tab--selected) {
    border-bottom: none;
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
  padding: 20px 0px 21px;
`;

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default ProfilePage;
