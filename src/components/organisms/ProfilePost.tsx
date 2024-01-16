import styled from '@emotion/styled';

import { useLike } from '../../hooks/useLike';
import { useSelector } from '../../redux/store';
import LikeButton from '../atoms/LikeButton';
import { UserIconImg } from '../atoms/UserIconImg';
import { useGetAuthor } from '../../hooks/useGetAuthor';
import { useEffect } from 'react';
import FormattedTime from '../atoms/FormattedTime';
import Link from 'next/link';
import PostPopup from './PostPopup';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
const ProfilePost = ({ post, onDelete }) => {
  const { user: loginUser } = useSelector((state) => state.user);
  const { getAuthorByPostId, user, isLoadingAuthor } = useGetAuthor();
  const { toggleLike, isGood } = useLike(post, loginUser);
  useEffect(() => {
    getAuthorByPostId(post);
  }, [post]);

  return (
    <SArticle>
      <SLeftContent>
        <Link href={`/profile/${user?.username}`}>
          {isLoadingAuthor ? (
            <Skeleton
              circle
              height="40px"
              width="40px"
              containerClassName="avatar-skeleton"
            />
          ) : (
            <SUserIconImg src={user?.profileImg} />
          )}
        </Link>
      </SLeftContent>
      <SRightContent>
        <SPostHeader>
          <div>
            <SPostUsername>
              {isLoadingAuthor ? <Skeleton /> : user?.username}
            </SPostUsername>

            <FormattedTime dateString={post.createdAt} />
          </div>
          {user?.username === loginUser?.username && (
            <PostPopup post={post} onDelete={onDelete} />
          )}
        </SPostHeader>
        <SPostContent>
          {isLoadingAuthor ? <Skeleton /> : post.desc}
        </SPostContent>
        <SPostFooter>
          <LikeButton isGood={isGood} toggleLike={toggleLike} />
        </SPostFooter>
      </SRightContent>
    </SArticle>
  );
};

const SArticle = styled.article`
  position: relative;
  display: flex;
  padding: 16px 16px 0px 16px;
  border-bottom: 1px solid #f2f2f2;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  align-items: start;
`;
const SLeftContent = styled.div`
  margin-right: 12px;
  width: 60px;
  color: #000;
`;
const SRightContent = styled.div`
  padding-bottom: 12px;
  width: 100%;
`;
const SPostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SPostFooter = styled.div`
  margin-top: 12px;
`;
const SPostUsername = styled.span`
  font-weight: bold;
  font-size: 16px;
`;
const SUserIconImg = styled(UserIconImg)`
  position: relative;
  z-index: 1;
  width: 40px;
  height: 40px;
  cursor: pointer;

  @media (min-width: 425px) {
    & {
      width: 45px;
      height: 45px;
    }
  }
`;
const SPostContent = styled.div`
  font-size: 16px;
`;
export default ProfilePost;
