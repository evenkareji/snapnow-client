import axios from 'axios';
import { useEffect, useState } from 'react';

import { useSelector } from '../../redux/store';
import { User } from '../../types';
import { UserListItem } from '../molecules/UserListItem';

export const FollowersInfo = ({ searchResults, searchTerm }) => {
  const [followers, setFollowers] = useState<Array<User>>([]);
  const [originalFollowings, setOriginalFollowings] = useState<Array<User>>([]);
  const { user, loading } = useSelector((state) => state.user);
  useEffect(() => {
    const getFollowers = async () => {
      const response = await axios.get(`/api/users/followers/${user?._id}`);
      setFollowers(response.data);
      setOriginalFollowings(response.data);
    };
    !loading && getFollowers();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setFollowers(searchResults);
    } else {
      setFollowers(originalFollowings);
    }
  }, [searchResults, searchTerm, originalFollowings]);

  if (
    searchTerm != '' &&
    searchResults.length === 0 &&
    followers.length === 0
  ) {
    return <p>{`「${searchTerm}」に一致するユーザーが存在しません`}</p>;
  }

  return (
    <div>
      {followers &&
        followers.map((follower) => (
          <UserListItem user={follower} key={follower._id} />
        ))}
    </div>
  );
};
