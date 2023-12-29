import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';
import 'react-tabs/style/react-tabs.css'; // 必要に応じてスタイルを上書き
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Post } from '../types';
import { getPosts } from '../api/getPosts';
import { PostView } from '../components/organisms/PostView';
import { ReactElement, useEffect, useState } from 'react';
import Layout from '../components/templates/Layout';
import { useDispatch } from 'react-redux';
import { AppDispatch, useSelector } from '../redux/store';
import { fetchInitialUser } from '../features/userSlice';
import { ClipLoader } from 'react-spinners';
import { useRouter } from 'next/router';
import axios from 'axios';

// カスタムスタイルの TabList
const StyledTabList = styled(TabList)`
  display: flex;
  justify-content: center; // アイテムを中央に配置
  margin: 0;
  padding: 0;
  list-style-type: none; // リストアイテムの点を削除
`;

// カスタムスタイルの Tab
const StyledTab = styled(Tab)`
  padding: 8px 12px;
  user-select: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: white; // テキストカラーを白に
  margin-right: 4px; // タブ間のマージンを設定
  outline: none; //
  // アクティブなタブのスタイル
  &.react-tabs__tab--selected {
    border-bottom: 2px solid #ff8d06; // 下線を白にして画像に合わせる
    color: #ff8d06; // アクティブなタブのテキストカラーを白に
  }

  // アクティブでないタブのスタイル
  &:not(.react-tabs__tab--selected) {
    border-bottom: none; // 非アクティブなタブの下線を削除
    color: #c9c9c9; // 非アクティブなタブのテキストカラーを薄い色に
    &:hover {
      color: #ff8d06; // ホバー時にテキストカラーを白に
      opacity: 0.5;
    }
  }
`;

// TabPanel にもスタイルを適用する場合
const StyledTabPanel = styled(TabPanel)`
  display: none;
  &.react-tabs__tab-panel--selected {
    display: block;
  }
`;

export const getServerSideProps: GetServerSideProps<{
  posts: Post[];
}> = async () => {
  const posts = await getPosts();

  return { props: { posts } };
};

const Time = ({
  posts: initialPosts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { user, loading } = useSelector((state) => state.user);
  const [posts, setPosts] = useState(initialPosts); // 投稿の状態を管理

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInitialUser());
  }, []);
  useEffect(() => {
    if (!user && !loading) {
      router.push('/login');
    }
  }, [user]);

  // タブが選択されたときのハンドラ
  const fetchPosts = async () => {
    try {
      const response = await axios.get(`/api/posts/timeline/${user?._id}`);
      setPosts(response.data);
    } catch (error) {
      console.error('APIの取得に失敗しました。', error);
    }
  };

  // タブが選択されたときのハンドラ
  const handleTabSelect = (index: number) => {
    if (index === 0) {
      // "フォロー中" タブが選択されたとき
      fetchPosts(); // 非同期関数を呼び出す
    }
    // onSelectイベントは戻り値を必要としないため、ここでは何も返さない
  };
  if (loading) {
    return (
      <div className="loader-container">
        <ClipLoader color="#ed6103" loading={true} size={50} />
      </div>
    );
  }
  return (
    <Tabs onSelect={handleTabSelect}>
      <StyledTabList>
        <StyledTab>フォロー中</StyledTab>
        <StyledTab>今何してる？</StyledTab>
      </StyledTabList>

      <StyledTabPanel>
        <SPostMain>
          <PostBg>
            <PostSlide>
              {posts.map((post) => (
                <PostView post={post} key={post['_id']} />
              ))}
            </PostSlide>
          </PostBg>
        </SPostMain>
      </StyledTabPanel>
      <StyledTabPanel>
        <SPostMain>
          <PostBg>
            <PostSlide>
              {posts.map((post) => (
                <PostView post={post} key={post['_id']} />
              ))}
            </PostSlide>
          </PostBg>
        </SPostMain>
      </StyledTabPanel>
    </Tabs>
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

Time.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Time;
