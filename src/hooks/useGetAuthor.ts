import axios from 'axios';
import { useState } from 'react';
import { User, Post } from '../types';

export const useGetAuthor = () => {
  const [user, setUser] = useState<User>();
  const [isLoadingAuthor, setLoadingAuthor] = useState(false);
  const getAuthorByPostId = async (post: Post) => {
    setLoadingAuthor(true);
    const response = await axios.get(`/api/users/${post.userId}`);
    setLoadingAuthor(false);
    setUser(response.data);
  };
  return { getAuthorByPostId, user, isLoadingAuthor };
};
