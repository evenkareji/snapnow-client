import SearchIcon from '@mui/icons-material/Search';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { ReactElement, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // 必要に応じてスタイルを上書き
import styled from 'styled-components';
import { getPosts } from '../api/getPosts';
import { PostView } from '../components/organisms/PostView';
import Layout from '../components/templates/Layout';
import { useSelector } from '../redux/store';
import { Post } from '../types';

import HamburgerMenu from '../components/organisms/HamburgerMenu';
import { useAuthGuard } from '../hooks/useAuthGuard';
import { useFollowingsPosts } from '../hooks/useFollowingsPosts';

export const getServerSideProps: GetServerSideProps<{
  posts: Post[];
}> = async () => {
  const posts = await getPosts();

  return { props: { posts } };
};

const Home = ({
  posts: initialPosts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { user, loading } = useSelector((state) => state.user);
  const [posts, setPosts] = useState(initialPosts);
  const [tabIndex, setTabIndex] = useState(1);
  const { getFollowingsPosts } = useFollowingsPosts();

  useAuthGuard();

  const fetchPosts = async () => {
    try {
      const response = await getFollowingsPosts(user?._id);
      setPosts(response);
    } catch (error) {
      console.error('APIの取得に失敗しました。', error);
    }
  };

  // const handleTabSelect = (index,関数1,関数2) => { tabsで使い回しが可能になる
  const handleTabSelect = (index) => {
    setTabIndex(index);
    if (index === 0) {
      fetchPosts();
    } else if (index === 1) {
      setPosts(initialPosts);
    }
  };
  if (loading) {
    return (
      <div className="loader-container">
        <ClipLoader color="#ed6103" loading={true} size={50} />
      </div>
    );
  }

  return (
    <Tabs selectedIndex={tabIndex} onSelect={handleTabSelect}>
      <StyledTabList>
        <SFlex>
          <HamburgerMenu
            username={user?.username}
            handleTabSelect={handleTabSelect}
            tabIndex={tabIndex}
          />
          <StyledTab>フォロー中</StyledTab>
          <StyledTab>今何してる？</StyledTab>
          <SSearchPostIcon onClick={() => router.push('/search-post')} />
        </SFlex>
      </StyledTabList>
      <StyledTabPanel>
        <SPostMain>
          <PostBg>
            <PostSlide>
              {tabIndex === 0 && posts.length === 0 ? (
                <SNoFollowingsMessage>
                  フォローしているユーザーがいません。
                </SNoFollowingsMessage>
              ) : (
                posts.map((post) => <PostView post={post} key={post['_id']} />)
              )}
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
const StyledTabList = styled(TabList)`
  padding: 0;
  list-style-type: none;
  position: fixed; // 位置を固定
  top: 0; // 上部に配置
  left: 0;
  right: 0;
  margin-top: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.6);
  height: 46px;

  @media (min-width: 468px) {
    margin-left: 20vw;
    background-color: rgb(255, 255, 255);
  }
  @media (min-width: 768px) {
    /* flex: 0.9; */
    margin-left: 20vw;
  }
`;
const SFlex = styled.div`
  width: 92%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SNoFollowingsMessage = styled.p`
  width: 302px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const SSearchPostIcon = styled(SearchIcon)`
  cursor: pointer;
`;

// カスタムスタイルの Tab
const StyledTab = styled(Tab)`
  font-weight: bold;
  font-size: 16px;
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
    border-bottom: 3px solid #ff8d06; // 下線を白にして画像に合わせる
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
