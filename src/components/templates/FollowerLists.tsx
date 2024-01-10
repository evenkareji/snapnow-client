import { useState } from 'react';

import { useSearchFollowersUser } from '../../hooks/useSearchFollowersUser';
import { SearchForm } from '../atoms/SerachForm';
import Container from '../layout/Container';
import { FollowersInfo } from '../organisms/FollowersInfo';

export const FollowerLists = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { searchHandler } = useSearchFollowersUser(
    searchTerm,
    setSearchResults,
  );
  return (
    <Container>
      <SearchForm
        placeholder="フォロワーを検索"
        searchHandler={searchHandler}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        MarginBottom={'20px'}
      />
      <FollowersInfo searchResults={searchResults} searchTerm={searchTerm} />
    </Container>
  );
};
