import axios from 'axios';
import { useDispatch } from 'react-redux';
import { toggleFollow } from '../features/userSlice';
import { AppDispatch } from '../redux/store';

export const useToggleFollow = () => {
  const dispatch: AppDispatch = useDispatch();

  const followUser = async (otherUserId, loginUserId) => {
    if (loginUserId) {
      try {
        const { data } = await axios.put(`/api/users/${otherUserId}/follow`, {
          userId: loginUserId,
        });
        dispatch(toggleFollow(data));
      } catch (err) {
        console.error('Follow Error:', err);
      }
    }
  };

  const unFollowUser = async (otherUserId, loginUserId) => {
    if (loginUserId) {
      try {
        const { data } = await axios.put(`/api/users/${otherUserId}/unfollow`, {
          userId: loginUserId,
        });
        dispatch(toggleFollow(data));
      } catch (err) {
        console.error('Unfollow Error:', err);
      }
    }
  };

  return { followUser, unFollowUser };
};
