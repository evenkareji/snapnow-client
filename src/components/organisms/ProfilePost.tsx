import styled from '@emotion/styled';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useRouter } from 'next/router';
import { useLike } from '../../hooks/useLike';
import { useSelector } from '../../redux/store';
import LikeButton from '../atoms/LikeButton';
import { UserIconImg } from '../atoms/UserIconImg';
const ProfilePost = ({ post, onDelete }) => {
  const { user: loginUser } = useSelector((state) => state.user);
  const router = useRouter();
  const { toggleLike, isGood } = useLike(post, loginUser);
  const { username } = router.query;

  // onClick={() => onDelete(post._id)}>
  return (
    <SArticle>
      <SLeftContent>
        <SUserIconImg src={loginUser?.profileImg} />
      </SLeftContent>
      <SRightContent>
        <SPostHeader>
          <SPostUsername>{username}</SPostUsername>
          <MoreHorizIcon />
        </SPostHeader>
        <SPostContent>{post.desc}</SPostContent>
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
  border-right: 1px solid #f2f2f2;
  border-left: 1px solid #f2f2f2;
  width: 100%;

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
  width: 40px;
  height: 40px;

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
