import React, { useCallback, useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Hr } from '../atoms/Hr';
import { logout } from '../../features/userSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { useRouter } from 'next/router';

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
        icon: <LogoutIcon style={{ marginRight: '16px', color: '#96979B' }} />,
        label: '利用規約',
        href: '/',
      },
      {
        icon: <LogoutIcon style={{ marginRight: '16px', color: '#96979B' }} />,
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
      {/* Overlay background */}
      {isMenuVisible && (
        <div
          style={{
            zIndex: '999', // Make sure it's below the menu (1000)
            background: 'rgba(0, 0, 0, 0.5)',
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            display: 'block', // Toggle this based on menu visibility
          }}
          onClick={toggleMenu}
        />
      )}

      {/* UserMenu */}
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
          }}
        >
          <div
            style={{
              width: '93%',
              marginRight: 'auto',
              marginLeft: 'auto',
            }}
          >
            <div>
              <h2>アカウントについて</h2>
              {menuItems.account.map(({ icon, label, href }, index) => (
                <Link href={href} key={index}>
                  <SMenuContainer>
                    {icon}
                    {label}
                  </SMenuContainer>
                </Link>
              ))}
              <Hr />
            </div>
            <div>
              <h2>Snap Nowについて</h2>
              {menuItems.aboutSnapNow.map(({ icon, label, href }, index) => (
                <Link href={href} key={index}>
                  <SMenuContainer>
                    {icon}
                    <div>{label}</div>
                  </SMenuContainer>
                </Link>
              ))}
              <Hr />
            </div>
            <div onClick={logoutEvent}>
              <SMenuContainer>
                <div>{menuItems.logout.icon}</div>
                <div>{menuItems.logout.label}</div>
              </SMenuContainer>
            </div>
          </div>
        </div>
      )}

      <SMoreHorizIcon onClick={toggleMenu} />
    </>
  );
};

const SMenuContainer = styled.div`
  display: flex;
  margin-right: 16px;
`;

const SMoreHorizIcon = styled(MoreHorizIcon)`
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
`;

export default UserMenu;
