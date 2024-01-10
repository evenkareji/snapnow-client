import DehazeIcon from '@mui/icons-material/Dehaze';
import DescriptionIcon from '@mui/icons-material/Description';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import { AppDispatch } from '../../redux/store';
import MenuContainer from '../atoms/MenuContainer';
import MenuSection from './MenuSection';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PrimaryBtn from '../atoms/PrimaryBtn';
import styled from '@emotion/styled';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HomeIcon from '@mui/icons-material/Home';

const HamburgerMenu = ({ username, handleTabSelect, tabIndex }) => {
  const menuItems = {
    account: [
      {
        icon: (
          <PersonOutlineIcon
            style={{ marginRight: '16px', color: '#96979B' }}
          />
        ),
        label: 'プロフィール編集',
        href: `/profile/${username}/edit`,
      },
    ],
    aboutSnapNow: [
      {
        icon: (
          <DescriptionIcon style={{ marginRight: '16px', color: '#96979B' }} />
        ),
        label: '利用規約',
        href: '/',
      },
      {
        icon: (
          <TextSnippetIcon style={{ marginRight: '16px', color: '#96979B' }} />
        ),
        label: 'プライバシーポリシー',
        href: '/',
      },
    ],
    searchUser: {
      icon: (
        <PersonSearchIcon style={{ marginRight: '16px', color: '#96979B' }} />
      ),
      label: 'ユーザー検索',
      href: '/search-user',
    },
    homePost: {
      icon: (
        <HomeIcon
          style={{
            fontSize: '48px',
            marginRight: '16px',
            color: tabIndex === 1 ? '#FF8D06' : '#96979B',
          }}
        />
      ),
      label: '今何してる？',
    },
    followingPost: {
      icon: (
        <PeopleAltIcon
          style={{
            fontSize: '48px',
            marginRight: '16px',
            color: tabIndex === 0 ? '#FF8D06' : '#96979B',
          }}
        />
      ),
      label: 'フォロー中',
    },
    logout: {
      icon: <LogoutIcon style={{ marginRight: '16px', color: '#96979B' }} />,
      label: 'ログアウト',
      href: '/logout',
    },
  };
  const dispatch: AppDispatch = useDispatch();

  const router = useRouter();
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  const logoutEvent = useCallback(async () => {
    try {
      dispatch(logout());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch, router]);
  return (
    <>
      {isMenuVisible && (
        <div
          style={{
            zIndex: '999',
            background: 'rgba(0, 0, 0, 0.5)',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            position: 'fixed',
          }}
          onClick={toggleMenu}
        />
      )}

      {isMenuVisible && (
        <div
          style={{
            zIndex: '1000',
            background: '#ffffff',
            width: '275px',
            height: 'calc(100% - 49px)',

            top: '0',
            left: '0',

            position: 'fixed',
            overflowY: 'scroll',
          }}
        >
          <div
            style={{
              width: '86%',
              marginRight: 'auto',
              marginLeft: 'auto',
              paddingTop: '24px',
            }}
          >
            <h2
              style={{
                textAlign: 'left',
                marginBottom: '34px',
                fontSize: '28px',
              }}
            >
              Snap Now
            </h2>

            <div
              onClick={() => {
                handleTabSelect(1);
                setMenuVisible(false);
              }}
            >
              <MenuContainer>
                <div>{menuItems.homePost.icon}</div>
                <div
                  style={{
                    fontWeight: 'bold',
                    fontSize: '18px',
                    color: tabIndex === 1 ? '#FF8D06' : '#96979B',
                  }}
                >
                  {menuItems.homePost.label}
                </div>
              </MenuContainer>
            </div>
            <div
              onClick={() => {
                handleTabSelect(0);
                setMenuVisible(false);
              }}
            >
              <MenuContainer>
                <div>{menuItems.followingPost.icon}</div>
                <div
                  style={{
                    fontWeight: 'bold',
                    fontSize: '18px',
                    color: tabIndex === 0 ? '#FF8D06' : '#96979B',
                  }}
                >
                  {menuItems.followingPost.label}
                </div>
              </MenuContainer>
            </div>

            {!username && (
              <SloginBtn onClick={() => router.push('/login')}>
                ログイン
              </SloginBtn>
            )}
            <div onClick={() => router.push(menuItems.searchUser.href)}>
              <MenuContainer>
                <div>{menuItems.searchUser.icon}</div>
                <div>{menuItems.searchUser.label}</div>
              </MenuContainer>
            </div>
            <MenuSection
              heading="アカウントについて"
              items={menuItems.account}
            />
            <MenuSection
              heading="Snap Nowについて"
              items={menuItems.aboutSnapNow}
            />
            <div onClick={logoutEvent}>
              <MenuContainer>
                <div>{menuItems.logout.icon}</div>
                <div>{menuItems.logout.label}</div>
              </MenuContainer>
            </div>
          </div>
        </div>
      )}

      <DehazeIcon style={{ cursor: 'pointer' }} onClick={toggleMenu} />
    </>
  );
};

const SloginBtn = styled(PrimaryBtn)`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
  height: 48px !important;
  font-size: 15px;
  font-weight: 400;
`;

export default HamburgerMenu;
