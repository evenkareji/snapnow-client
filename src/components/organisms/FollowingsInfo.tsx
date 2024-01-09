import axios from 'axios';
import { useEffect, useState } from 'react';

import { useSelector } from '../../redux/store';
import { User } from '../../types';
import { UserListItem } from '../molecules/UserListItem';

export const FollowingsInfo = ({ searchResults, searchTerm }) => {
  const [followings, setFollowings] = useState<Array<User>>([]);
  const [originalFollowings, setOriginalFollowings] = useState<Array<User>>([]);

  const { user, loading } = useSelector((state) => state.user);

  useEffect(() => {
    const getFollowers = async () => {
      if (user && user._id) {
        const response = await axios.get(`/api/users/followings/${user._id}`);
        setFollowings(response.data);
        setOriginalFollowings(response.data);
      }
    };

    !loading && getFollowers();
  }, [user, loading]);

  useEffect(() => {
    if (searchTerm) {
      setFollowings(searchResults);
    } else {
      setFollowings(originalFollowings);
    }
  }, [searchResults, searchTerm, originalFollowings]);

  if (
    searchTerm != '' &&
    searchResults.length === 0 &&
    followings.length === 0
  ) {
    return <p>{`「${searchTerm}」に一致するユーザーが存在しません`}</p>;
  }

  return (
    <div>
      {followings &&
        followings.map((following) => (
          <UserListItem user={following} key={following._id} />
        ))}
    </div>
  );
};
