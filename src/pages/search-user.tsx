import React, { useState } from 'react';
import { searchUser } from './functions/user';
import { FollowingInfo } from '../components/molecules/FollowingInfo';

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
              <FollowingInfo following={user} key={user._id} />
            ),
          )}
      </div>
    </>
  );
};

export default SerachUser;
