import React, { useCallback, useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import DescriptionIcon from '@mui/icons-material/Description';
import { Hr } from '../atoms/Hr';
import { logout } from '../../features/userSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import MoreHorizIconStyled from '../atoms/MoreHorizIcon';
import MenuSection from '../organisms/MenuSection';
import { useRouter } from 'next/router';
import MenuContainer from '../atoms/MenuContainer';

const UserMenu = ({ username }) => {
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
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            display: 'block',
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
            top: '0',
            right: '0',
            bottom: '0',
            position: 'fixed',
            display: 'block', // Toggle this based on menu visibility
            borderRadius: '8px 0px 0px 0px',
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
                marginBottom: '20px',
                fontSize: '20px',
              }}
            >
              プライバシーと設定
            </h2>
            <Hr />
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

      <MoreHorizIconStyled onClick={toggleMenu} />
    </>
  );
};

export default UserMenu;
