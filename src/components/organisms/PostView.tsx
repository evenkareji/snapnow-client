import Link from 'next/link';
import { FC, useEffect, useRef, useState } from 'react';
import { css } from '@emotion/css';
import styled from 'styled-components';

import { useSelector } from '../../redux/store';
import { useGetAuthor } from '../../hooks/useGetAuthor';
import { useLike } from '../../hooks/useLike';
import { useRouter } from 'next/router';

import { useToggleFollow } from '../../hooks/useToggleFollow';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Post } from '../../types';
import LikeButton from '../atoms/LikeButton';
import { FollowToggleButton } from '../molecules/FollowToggleButton';
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
export const PostView: FC<{ post: Post }> = (props) => {
  const { post }: any = props;

  const { unFollowUser, followUser } = useToggleFollow();
  const { getAuthorByPostId, user, isLoadingAuthor } = useGetAuthor();
  const router = useRouter();

  const [isPlaying, setIsPlaying] = useState(false);
  const postRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const analyserRef = useRef<AnalyserNode>();
  const animeIdRef = useRef<number>();
  const volumeRef = useRef(0.05);

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

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  /**
   * 曲を再生させたとき
   */
  const playHandler = () => {
    if (!analyserRef.current) {
      const audioContext = new AudioContext();

      const src = audioContext.createMediaElementSource(audioRef.current!);
      const analyser = audioContext.createAnalyser();

      src.connect(analyser);
      analyser.connect(audioContext.destination);
      analyser.fftSize = 256;
      analyserRef.current = analyser;
      audioRef.current!.volume = volumeRef.current;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      if (!canvasRef.current) return;

      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;

      const ctx = canvasRef.current.getContext('2d')!;
      renderFrame(ctx, dataArray);
    }
  };

  /**
   * フレーム毎にcanvasに描画する
   * @param ctx
   * @param dataArray
   */
  function renderFrame(ctx: CanvasRenderingContext2D, dataArray: Uint8Array) {
    const WIDTH = ctx.canvas.width;
    const HEIGHT = ctx.canvas.height;
    const dataLength = dataArray.length;
    const barWidth = WIDTH / dataLength;
    let x = 0;

    analyserRef.current!.getByteFrequencyData(dataArray);

    ctx.fillStyle = '#ffffff'; // 例: 黒色の背景
    const waveAmplitude = 0; // ウェーブの振幅
    const waveFrequency = 0.02; // ウェーブの周波数
    const baseColor = [255, 165, 0];

    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    for (let i = 0; i < dataLength; i++) {
      const barHeight = dataArray[i];

      const r = baseColor[0] + barHeight;
      const g = baseColor[1] + barHeight;
      const b = baseColor[2] + barHeight;

      ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';

      // ウェーブの高さを調整
      const offsetY = Math.sin(i * waveFrequency) * waveAmplitude;

      ctx.fillRect(x, HEIGHT / 2 + offsetY, barWidth, -barHeight);
      ctx.fillRect(x, HEIGHT / 2 + offsetY, barWidth, barHeight);

      x += barWidth + 1;
    }

    animeIdRef.current = requestAnimationFrame(() =>
      renderFrame(ctx, dataArray),
    );
  }

  useEffect(() => {
    return () => {
      if (animeIdRef.current) {
        cancelAnimationFrame(animeIdRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const postElement = postRef.current;
    const audioElement: any = audioRef.current;
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

  if (!loginUser) {
    return null;
  }

  return (
    <PostBorder
      ref={postRef}
      id={`post-${post.id}`}
      className="post-slide"
      onPlay={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
    >
      {post.img && <SImg src={post.img} alt="" />}
      {/* <CenteredContainer> */}
      {isPlaying ? null : <PlayButton onClick={togglePlay} />}
      {/* </CenteredContainer> */}
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

        {/* <div onClick={() => audioRef.current?.play()}>ミュート</div> */}
        <audio
          style={{ display: 'none' }}
          ref={audioRef}
          // loop
          controls
          crossOrigin="anonymous"
          onPlay={playHandler}
          onVolumeChange={() => (volumeRef.current = audioRef.current!.volume)}
        >
          <source src={post.audioUrl} type="audio/webm" />
          お使いのブラウザはオーディオ要素をサポートしていません。
        </audio>
      </SPostContent>
      <div className={styles.container}>
        <canvas ref={canvasRef} className={styles.canvas} />
      </div>
      <SAside>
        <LikeButton size={'25'} isGood={isGood} toggleLike={toggleLike} />
        <HeartCount isGood={isGood}>{post.likes.length}</HeartCount>
      </SAside>
    </PostBorder>
  );
};
const styles = {
  container: css`
    position: absolute;
    top: 0px;

    top: 50%;
    right: 0px;
    width: 100%;
    height: 80%;

    z-index: 0;
  `,
  canvas: css`
    width: 100%;
    height: 50%;
    z-index: 10;
  `,
  player: css`
    position: absolute;
    bottom: 50px;
    z-index: 10;
  `,
};
const CenteredContainer = styled.div`
  position: absolute; // 画面全体に対して固定
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100; // 必要に応じて調整
  opacity: 0.5;
`;
const PlayButton = styled(PlayArrowSharpIcon)`
  background: #bcbcbc;

  width: 50px !important;
  height: 50px !important;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000000;
`;
const SPostContent = styled.div`
  position: absolute;
  top: 55px;
  left: 38px;
  width: 87%;
  height: 70%;
  z-index: 1;
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
  z-index: 9999999;
`;

const HeartCount = styled.span`
  margin-bottom: 18px;
  color: ${({ isGood }) => (isGood ? 'var(--accent-color)' : '#908f8f')};
`;

const PostBorder = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  z-index: 0;
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
