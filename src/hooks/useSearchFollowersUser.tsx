import { useState } from 'react';
import { searchFollowerUser } from '../functions/user';
import { useSelector } from '../redux/store';

export const useSearchFollowersUser = (searchTerm, setSearchResults) => {
  const [isError, setIsError] = useState(false);
  const { user } = useSelector((state) => state.user);

  const searchHandler = async () => {
    if (searchTerm === '') {
      setSearchResults([]);
    } else {
      try {
        const res = await searchFollowerUser(user, searchTerm);
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
