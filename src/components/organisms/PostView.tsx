import Link from 'next/link';
import { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { useSelector } from '../../redux/store';

import { useGetAuthor } from '../../hooks/useGetAuthor';
import { useLike } from '../../hooks/useLike';

import { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useToggleFollow } from '../../hooks/useToggleFollow';
import { Post } from '../../types';
import LikeButton from '../atoms/LikeButton';
import { FollowToggleButton } from '../molecules/FollowToggleButton';

export const PostView: FC<{ post: Post }> = (props) => {
  const { post }: any = props;

  const { unFollowUser, followUser } = useToggleFollow();
  const { getAuthorByPostId, user, isLoadingAuthor } = useGetAuthor();
  const router = useRouter();

  const postRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
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
  if (!loginUser) {
    return null;
  }
  useEffect(() => {
    const postElement = postRef.current;
    const audioElement: any = audioRef.current;
    // const repeatAudio = () => {
    //   audioElement.play();
    // };

    // if (audioElement) {
    //   audioElement.addEventListener('ended', repeatAudio);
    // }
    if (postElement && audioElement) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            audioElement.play();
          } else {
            audioElement.pause();
          }
        },
        {
          threshold: 0.5, // 50%の要素が見えた時にトリガー
        },
      );

      observer.observe(postElement);

      return () => {
        observer.unobserve(postElement);
      };
    }
    return () => {};
  }, [postRef, audioRef]);

  return (
    <PostBorder ref={postRef} id={`post-${post.id}`} className="post-slide">
      {post.img && <SImg src={post.img} alt="" />}

      <SBg />
      <SPostContent>
        <SPostHeader>
          <Link href={`profile/${user?.username}`}>
            <a>
              {isLoadingAuthor ? (
                <Skeleton
                  circle
                  height="52px"
                  width="52px"
                  containerClassName="avatar-skeleton"
                />
              ) : (
                <SUserIconImg src={user?.profileImg} />
              )}
            </a>
          </Link>
          <Box>
            {isLoadingAuthor ? (
              <Skeleton width={100} />
            ) : (
              <SUserName>{user?.username}</SUserName>
            )}
          </Box>

          <FollowToggleButton
            loginUser={loginUser}
            otherUserId={post.userId}
            onClickFollow={() => followUser(post.userId, loginUser?._id)}
            onClickUnFollow={() => unFollowUser(post.userId, loginUser?._id)}
          />
        </SPostHeader>
        <SDescContainer>
          <SPostArticle post={post.img}>{post.desc}</SPostArticle>
        </SDescContainer>

        <audio ref={audioRef} loop controls>
          <source src={post.audioUrl} type="audio/webm" />
          お使いのブラウザはオーディオ要素をサポートしていません。
        </audio>
      </SPostContent>
      <SAside>
        <LikeButton size={'25'} isGood={isGood} toggleLike={toggleLike} />
        <HeartCount isGood={isGood}>{post.likes.length}</HeartCount>
      </SAside>
    </PostBorder>
  );
};

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
  color: ${({ isGood }) => (isGood ? 'var(--accent-color)' : '#908f8f')};
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
