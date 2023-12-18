import axios from 'axios';

import { AddPost } from '../types';

import { useRouter } from 'next/router';
import { useSelector } from '../redux/store';

export const useAddPost = (setIsLoadingSubmission) => {
  const router = useRouter();
  const { user } = useSelector((state) => state.user);

  const AddPost = async (desc: string) => {
    setIsLoadingSubmission(true);
    if (!desc || !user) {
      return;
    }

    const newPost: AddPost = {
      userId: user._id,
      desc,
    };

    try {
      await axios.post('/api/posts', newPost);

      router.push('/');
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoadingSubmission(false);
    }
  };

  return { AddPost, user };
};
