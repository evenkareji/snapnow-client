import Link from 'next/link';
import { FC, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import { useSelector } from '../../redux/store';

import { useFollow } from '../../hooks/useFollow';
import { useGetAuthor } from '../../hooks/useGetAuthor';
import { useLike } from '../../hooks/useLike';
import { useUnFollow } from '../../hooks/useUnFollow';

import { useRouter } from 'next/router';
import { Post } from '../../types';
import { HeartIcon } from '../atoms/HeartIcon/HeartIcon';
import { FollowToggleButton } from '../molecules/FollowToggleButton';

export const PostView: FC<{ post: Post }> = (props) => {
  const { post } = props;

  const { followUser } = useFollow();
  const { unFollowUser } = useUnFollow();
  const { getAuthorByPostId, user } = useGetAuthor();
  const router = useRouter();
  const { user: loginUser, loading } = useSelector((state) => state.user);

  const { toggleLike, isGood } = useLike(post, loginUser);

  useEffect(() => {
    if (!loginUser && !loading) {
      router.push('/login');
    }
  }, [loading, loginUser, router]);

  useEffect(() => {
    getAuthorByPostId(post);
  }, [post]);

  const onClickFollow = useCallback(
    () => followUser(post, loginUser),
    [post._id, loginUser?._id, followUser],
  );
  const onClickUnFollow = useCallback(
    () => unFollowUser(post, loginUser),
    [post._id, loginUser?._id, unFollowUser],
  );

  if (!loginUser) {
    return null;
  }
  return (
    <PostBorder>
      {post.img && <SImg src={post.img} alt="" />}

      <SBg />
      <SPostContent>
        <SPostHeader>
          <Link href={`profile/${user?.username}`}>
            <SUserIconImg src={user?.profileImg} />
          </Link>
          <Box>
            <SUserName>{user?.username}</SUserName>
          </Box>
          <FollowToggleButton
            loginUser={loginUser}
            postUserId={post.userId}
            onClickFollow={onClickFollow}
            onClickUnFollow={onClickUnFollow}
          />
        </SPostHeader>
        <SDescContainer>
          <SPostArticle post={post.img}>{post.desc}</SPostArticle>
        </SDescContainer>
      </SPostContent>
      <SAside>
        <SHeartBox onClick={toggleLike}>
          <HeartIcon isGood={isGood} />
        </SHeartBox>
        <HeartCount>{post.likes.length}</HeartCount>
      </SAside>
      <p>heasflikdhif;k.dhasK</p>
    </PostBorder>
  );
};

const SHeartBox = styled.div`
  cursor: pointer;
`;
const SPostContent = styled.div`
  position: absolute;
  top: 55px;
  left: 38px;
  width: 87%;
  height: 70%;
`;
const SPostHeader = styled.header`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between; // 左端と右端に要素を配置
  height: 72px;
`;

const SDescContainer = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;
const SPostArticle = styled.p`
  font-size: 26px;
  width: fit-content;
  color: #000;

  font-weight: normal;
  line-height: 1.9; /* 1.3倍が基準ですが、50%の値に基づいて適切に設定します */
  letter-spacing: 0.1em;
`;

const Box = styled.div`
  margin-left: 20px;
  flex: 1;
`;

const SUserIconImg = styled.img`
  object-fit: cover;
  border-radius: 100%;
  max-width: none;
  width: 52px;
  height: 52px;
  background-color: #fff;
  cursor: pointer;
`;
const SUserName = styled.h1`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

const SAside = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 75%;
  align-items: center;
  right: 10px;
  padding: 20px;
  text-align: center;
`;

const HeartCount = styled.span`
  margin-bottom: 18px;
  color: #3d3d3d;
`;

const PostBorder = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  scroll-snap-align: start;
  scroll-snap-stop: always;
`;
const SBg = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  background-color: #ffffff;
`;
const SImg = styled.img`
  height: 100vh;

  object-fit: cover;
`;
