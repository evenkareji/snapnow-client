import axios from 'axios';
import { useSelector } from '../redux/store';
import { useRouter } from 'next/router';
import getToken from '../utils/getToken';

export const useUpdatePost = (setIsLoadingSubmission) => {
  const { user } = useSelector((state) => state.user);
  const router = useRouter();
  const handleUpdatePost = async (postId: string, desc: string) => {
    console.log(desc);

    setIsLoadingSubmission(true);
    if (!user) {
      return;
    }

    try {
      const token = getToken();
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.put(
        `/api/posts/${postId}`,
        { userId: user?._id, desc },
        config,
      );

      router.push(`/profile/${user.username}`);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoadingSubmission(false);
    }
  };

  return { handleUpdatePost };
};
