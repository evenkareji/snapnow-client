import axios from 'axios';

import { AddPost } from '../types';

import { useRouter } from 'next/router';
import { useSelector } from '../redux/store';

export const useAddPost = (setIsLoadingSubmission) => {
  const router = useRouter();
  const { user } = useSelector((state) => state.user);

  const AddPost = async (desc: string, Submit: any) => {
    setIsLoadingSubmission(true);
    if (!desc || !user) {
      return;
    }
    const audioUrl = await Submit();
    console.log(audioUrl, 'submit');
    if (!audioUrl) {
      return console.log('audioがありませんん');
    }

    const newPost: AddPost = {
      userId: user._id,
      desc,
      audioUrl,
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
