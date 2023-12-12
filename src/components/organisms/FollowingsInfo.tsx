import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { FollowingInfo } from '../molecules/FollowingInfo';
import { User } from '../../types';
import { useSelector } from '../../redux/store';

export const FollowingsInfo = () => {
  const [followings, setFollowings] = useState<Array<User>>([]);

  const { user, loading } = useSelector((state) => state.user);

  useEffect(() => {
    const getFollowers = async () => {
      if (user && user._id) {
        const response = await axios.get(`/api/users/followings/${user._id}`);
        setFollowings(response.data);
      }
    };

    !loading && getFollowers();
  }, [user, loading]);

  return (
    <SUsersContainer>
      {followings.map((following) => (
        <FollowingInfo following={following} key={following[0]._id} />
      ))}
    </SUsersContainer>
  );
};

const SUsersContainer = styled.div`
  width: 92%;
  margin: 0 auto;
`;
