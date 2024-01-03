import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { User } from '../../types';
import { useSelector } from '../../redux/store';
import { UserListItem } from '../molecules/FollowingInfo';

export const FollowersInfo = () => {
  const [followers, setFollowers] = useState<Array<User>>([]);
  const { user, loading } = useSelector((state) => state.user);
  useEffect(() => {
    const getFollowers = async () => {
      const response = await axios.get(`/api/users/followers/${user?._id}`);
      setFollowers(response.data);
    };
    !loading && getFollowers();
  }, []);

  return (
    <SUsersContainer>
      {followers.map((follower) => (
        <UserListItem user={follower} key={follower._id} />
      ))}
    </SUsersContainer>
  );
};
const SUsersContainer = styled.div`
  width: 92%;
  margin: 0 auto;
`;
