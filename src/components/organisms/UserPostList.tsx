import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Post } from '../../types';
import useDeletePost from '../../hooks/useDeletePost';
import ProfilePost from './ProfilePost';
import { useLikesPosts } from '../../hooks/useLikesPosts';
import { useProfilePosts } from '../../hooks/useProfilePosts';

export const UserPostList = ({ tabIndex, profileUser }) => {
  const [posts, setPosts] = useState<Array<Post>>([]);
  const { handleDelete } = useDeletePost(setPosts);
  const { getProfilePosts } = useProfilePosts();
  const { getLikesPosts } = useLikesPosts();

  useEffect(() => {
    const fetchPosts = async () => {
      if (!profileUser) {
        return;
      }
      if (tabIndex === 0) {
        const response = await getProfilePosts(profileUser.username);
        setPosts(response as any);
      } else if (tabIndex === 1) {
        const response = await getLikesPosts(profileUser._id);
        setPosts(response);
      }
    };
    fetchPosts();
  }, [profileUser]);

  return (
    <SPersonalPost>
      {posts.map((post) => (
        <ProfilePost post={post} key={post._id} onDelete={handleDelete} />
      ))}
    </SPersonalPost>
  );
};

const SPersonalPost = styled.div`
  background-color: #fff;
  width: 100%;
  padding-bottom: 275px;
  width: 100%;
`;
