import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Post } from '../../types';
import useDeletePost from '../../hooks/useDeletePost';
import ProfilePost from './ProfilePost';

export const UserPostList = ({ username }) => {
  const [posts, setPosts] = useState<Array<Post>>([]);
  const { handleDelete } = useDeletePost(setPosts);
  useEffect(() => {
    const fetchPosts = async () => {
      if (!username) {
        return;
      }
      const response: any = await axios.get(`/api/posts/profile/${username}`);

      setPosts(
        response.data.sort((post1, post2) => {
          return (
            new Date(post2.createdAt).valueOf() -
            new Date(post1.createdAt).valueOf()
          );
        }),
      );
    };
    fetchPosts();
  }, [username]);

  return (
    <SPersonalPost>
      <SUserArea>
        {posts.map((post) => (
          <ProfilePost post={post} key={post._id} onDelete={handleDelete} />
        ))}
      </SUserArea>
    </SPersonalPost>
  );
};

const SPersonalPost = styled.div`
  background-color: #fafafa;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 275px;
`;

const SUserArea = styled.div`
  /* width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  @media (min-width: 650px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 0.4fr));
  }

  grid-gap: 3px 3px; */
`;
