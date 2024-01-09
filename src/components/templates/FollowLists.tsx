import { useState } from 'react';
import { SearchForm } from '../atoms/SerachForm';
import { FollowingsInfo } from '../organisms/FollowingsInfo';
import { useSearchFollowingUser } from '../../hooks/useSearchFollowingUser';
import Container from '../layout/Container';
export const FollowLists = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { searchHandler } = useSearchFollowingUser(
    searchTerm,
    setSearchResults,
  );

  return (
    <Container>
      <SearchForm
        placeholder="フォローしているユーザーを検索"
        searchHandler={searchHandler}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        MarginBottom={'20px'}
      />
      <FollowingsInfo searchResults={searchResults} searchTerm={searchTerm} />
    </Container>
  );
};
