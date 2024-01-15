import React, { useEffect, useState } from 'react';
import { UserListItem } from '../components/molecules/UserListItem';
import { SearchForm } from '../components/atoms/SerachForm';
import ArrowBackIosIconStyled from '../components/atoms/ArrowBackIcon';
import { useRouter } from 'next/router';
import ProfileHeader from '../components/molecules/ProfileHeader';
import SearchBtn from '../components/atoms/SearchBtn';
import styled from '@emotion/styled';
import { fetchInitialUser } from '../features/userSlice';
import { AppDispatch, useSelector } from '../redux/store';
import { useDispatch } from 'react-redux';
import { useSearchUser } from '../hooks/useSearchUser';

const SerachUser = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { searchHandler } = useSearchUser(searchTerm, setSearchResults);
  const { user, loading } = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInitialUser());
  }, []);
  useEffect(() => {
    if (!user && !loading) {
      router.push('/login');
    }
  }, [user]);

  return (
    <>
      <ProfileHeader
        borderBottom="none"
        title={
          <SearchForm
            placeholder="ユーザーを検索"
            searchHandler={searchHandler}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            width={'71%'}
            autoFocus={true}
          />
        }
        leftIcon={<ArrowBackIosIconStyled onClick={() => router.back()} />}
        rightIcon={<SearchBtn />}
      />
      {searchTerm != '' && searchResults.length === 0 && !searchResults ? (
        <p>{`「${searchTerm}」に一致するユーザーが存在しません`}</p>
      ) : (
        <SUsersContainer>
          {searchResults.map(
            (searchUser: {
              _id: string;
              username: string;
              profileImg: string;
            }) => (
              <UserListItem user={searchUser} key={searchUser._id} />
            ),
          )}
        </SUsersContainer>
      )}
    </>
  );
};

const SUsersContainer = styled.div`
  width: 92%;
  margin: 0 auto;
`;
export default SerachUser;
