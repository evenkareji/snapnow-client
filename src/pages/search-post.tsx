import React, { ReactElement, useEffect, useState } from 'react';
import { searchPost } from './functions/post';
import { PostView } from '../components/organisms/PostView';
import styled from '@emotion/styled';
import { AppDispatch, useSelector } from '../redux/store';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { fetchInitialUser } from '../features/userSlice';
import { ClipLoader } from 'react-spinners';
import Layout from '../components/templates/Layout';

const SerachPost = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
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

  if (loading) {
    return (
      <div className="loader-container">
        <ClipLoader color="#ed6103" loading={true} size={50} />
      </div>
    );
  }
  const searchHandler = async () => {
    if (searchTerm === '') {
      setSearchResults([]);
    } else {
      const posts = await searchPost(searchTerm);

      setSearchResults(posts);
    }
  };

  return (
    <>
      <div style={{ position: 'relative', zIndex: '1000000' }}>
        <div>SerachPost</div>
        <input
          placeholder="投稿検索"
          type="text"
          onKeyUp={searchHandler}
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      {searchTerm && (
        <SPostMain>
          <PostBg>
            <PostSlide>
              {searchResults.map((post) => (
                <PostView post={post} key={post['_id']} />
              ))}
            </PostSlide>
          </PostBg>
        </SPostMain>
      )}
    </>
  );
};
const SPostMain = styled.div`
  position: relative;
  width: 100vw;
  @media (min-width: 468px) {
    margin-left: 20vw;
    width: 80vw;
  }
  @media (min-width: 768px) {
    /* flex: 0.9; */
    margin-left: 20vw;
  }
  @media (min-width: 1264px) {
  }
`;
const PostSlide = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  border-radius: 0;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 466px) {
    & {
      max-width: 400px;
      width: 100%;
      height: 100vh;
      border-radius: 0px;
    }
  }

  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  overflow: scroll;
  overflow-y: auto;

  scroll-snap-type: y mandatory;
`;
const PostBg = styled.div`
  color: white;
  background-color: #000;
  height: 100vh;
  display: grid;
  place-items: center;
`;

SerachPost.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default SerachPost;
