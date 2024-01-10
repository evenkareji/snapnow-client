import axios from 'axios';
import { useDispatch } from 'react-redux';

import { toggleFollow } from '../features/userSlice';
import { AppDispatch } from '../redux/store';

export const useFollow = () => {
  const dispatch: AppDispatch = useDispatch();

  const followUser = async (
    otherUserId: string,
    loginUserId: string | undefined,
  ): Promise<void> => {
    if (loginUserId) {
      try {
        const { data } = await axios.put(`/api/users/${otherUserId}/follow`, {
          userId: loginUserId,
        });

        dispatch(toggleFollow(data));
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('Error: loginUser is null');
    }
  };
  return {
    followUser,
  };
};
