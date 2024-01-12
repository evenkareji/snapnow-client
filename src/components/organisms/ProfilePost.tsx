import styled from '@emotion/styled';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useLike } from '../../hooks/useLike';
import { useSelector } from '../../redux/store';
import LikeButton from '../atoms/LikeButton';
import { UserIconImg } from '../atoms/UserIconImg';
const ProfilePost = ({ post, onDelete }) => {
  const { user: loginUser } = useSelector((state) => state.user);

  const { toggleLike, isGood } = useLike(post, loginUser);
  // onClick={() => onDelete(post._id)}>
  return (
    <SArticle>
      <SLeftContent>
        <SUserIconImg src={loginUser?.profileImg} />
      </SLeftContent>
      <SRightContent>
        <SPostHeader>
          <div>name time</div>
          <MoreHorizIcon />
        </SPostHeader>
        <div>{post.desc}</div>

        <LikeButton isGood={isGood} toggleLike={toggleLike} />
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

export default ProfilePost;
