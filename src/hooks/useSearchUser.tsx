import { useState } from 'react';
import { searchUser } from '../functions/user';

export const useSearchUser = (searchTerm, setSearchResults) => {
  const [isError, setIsError] = useState(false);

  const searchHandler = async () => {
    if (searchTerm === '') {
      setSearchResults([]);
    } else {
      try {
        const res = await searchUser(searchTerm);
        setSearchResults(res);
        console.log(res);
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
