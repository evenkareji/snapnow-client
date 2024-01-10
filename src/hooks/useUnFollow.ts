import axios from 'axios';

import { useDispatch } from 'react-redux';
import { toggleFollow } from '../features/userSlice';

import { AppDispatch } from '../redux/store';
// useUnFollow関数に引数入れたら親コンポーネントのstate入れれるんじゃないか
export const useUnFollow = () => {
  const dispatch: AppDispatch = useDispatch();
  const unFollowUser = async (
    otherUserId: string,
    loginUserId: string | undefined,
  ): Promise<void> => {
    if (loginUserId) {
      try {
        const { data: followingUser } = await axios.put(
          `/api/users/${otherUserId}/unfollow`,
          {
            userId: loginUserId,
          },
        );

        dispatch(toggleFollow(followingUser));
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('Error: loginUser is null');
    }
  };

  return { unFollowUser };
};
