import { useState } from 'react';
import { searchFollowingUser } from '../functions/user';
import { useSelector } from '../redux/store';

export const useSearchFollowingUser = (searchTerm, setSearchResults) => {
  const [isError, setIsError] = useState(false);
  const { user } = useSelector((state) => state.user);

  const searchHandler = async () => {
    if (searchTerm === '') {
      setSearchResults([]);
    } else {
      try {
        const res = await searchFollowingUser(user, searchTerm);

        setSearchResults(res);
      } catch (error) {
        console.error(error);
        setIsError(true);
      }
    }
  };

  return {
    searchHandler,
    isError,
  };
};
