import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Post } from '../../types';
import useDeletePost from '../../hooks/useDeletePost';
import ProfilePost from './ProfilePost';
import { useLikesPosts } from '../../hooks/useLikesPosts';
import { useProfilePosts } from '../../hooks/useProfilePosts';
import PrimaryBtn from '../atoms/PrimaryBtn';
import Link from 'next/link';
import { MoonLoader } from 'react-spinners';

export const UserPostList = ({ tabIndex, profileUser }) => {
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [isPostsLoading, setIsPostsLoading] = useState<boolean>(false);
  const { handleDelete } = useDeletePost(setPosts);
  const { getProfilePosts } = useProfilePosts();
  const { getLikesPosts } = useLikesPosts();

  useEffect(() => {
    const fetchPosts = async () => {
      if (!profileUser) {
        return;
      }
      setIsPostsLoading(true);
      if (tabIndex === 0) {
        const response = await getProfilePosts(profileUser.username);
        setPosts(response as any);
        setIsPostsLoading(false);
      } else if (tabIndex === 1) {
        const response = await getLikesPosts(profileUser._id);
        setPosts(response);
        setIsPostsLoading(false);
      }
    };
    fetchPosts();
  }, [profileUser]);

  if (isPostsLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MoonLoader color="#ed6103" loading={true} size={30} />
      </div>
    );
  }
  return (
    <>
      <SPersonalPost>
        {posts.length === 0 && tabIndex === 0 ? (
          <>
            <SNoFollowingsMessage>コンテンツがありません</SNoFollowingsMessage>
            <Link href="/post">
              <a>
                <SAddPostBtn>投稿する</SAddPostBtn>
              </a>
            </Link>
          </>
        ) : (
          posts.map((post) => (
            <ProfilePost post={post} key={post._id} onDelete={handleDelete} />
          ))
        )}
      </SPersonalPost>
    </>
  );
};

const SNoFollowingsMessage = styled.p`
  text-align: center;
  width: 302px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const SAddPostBtn = styled(PrimaryBtn)`
  max-width: 400px;
  width: 80%;
  padding: 8px 10px;
  position: absolute;
  top: 45%;
  left: 50%;
  border-radius: 6px;
  transform: translate(-50%, -50%);
`;
const SPersonalPost = styled.div`
  background-color: #fff;
  width: 100%;
  padding-bottom: 275px;
  width: 100%;
`;
