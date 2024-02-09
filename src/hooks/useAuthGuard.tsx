import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchInitialUser } from '../features/userSlice';
import { AppDispatch, useSelector } from '../redux/store';

export const useAuthGuard = (): void => {
  const router = useRouter();
  const { user, loading } = useSelector((state) => state.user);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInitialUser());
  }, []);

  useEffect(() => {
    if (!user && !loading) {
      router.push('/login');
    }
  }, [user]);
};
