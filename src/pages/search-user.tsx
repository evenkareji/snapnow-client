import React, { useState } from 'react';
import { UserListItem } from '../components/molecules/FollowingInfo';
import { searchUser } from './functions/user';

const SerachUser = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchHandler = async () => {
    if (searchTerm === '') {
      setSearchResults([]);
    } else {
      const res = await searchUser(searchTerm);
      setSearchResults(res);
    }
  };

  return (
    <>
      <div>SerachUser</div>
      <input
        placeholder="user検索"
        type="text"
        onKeyUp={searchHandler}
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchTerm(e.target.value);
        }}
      />

      <div>
        {searchResults &&
          searchResults.map(
            (user: { _id: string; username: string; profileImg: string }) => (
              <UserListItem user={user} key={user._id} />
            ),
          )}
      </div>
    </>
  );
};

export default SerachUser;
