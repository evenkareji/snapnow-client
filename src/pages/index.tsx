import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { PostView } from '../components/organisms/PostView';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useSelector, AppDispatch } from '../redux/store';
import { fetchInitialUser } from '../features/userSlice';
import { useRouter } from 'next/router';
import { getPosts } from '../api/getPosts';
import Layout from '../components/templates/Layout';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Post } from '../types';
import ClipLoader from 'react-spinners/ClipLoader';

export const getServerSideProps: GetServerSideProps<{
  posts: Post[];
}> = async () => {
  const posts = await getPosts();

  return { props: { posts } };
};

const Home = ({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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

  return (
    <SPostMain>
      <PostBg>
        <PostSlide>
          {posts.map((post) => (
            <PostView post={post} key={post['_id']} />
          ))}
        </PostSlide>
      </PostBg>
    </SPostMain>
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
const PostBg = styled.div`
  color: white;
  background-color: #000;
  height: 100vh;
  display: grid;
  place-items: center;
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

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Home;
