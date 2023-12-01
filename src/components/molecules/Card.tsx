import { FC } from 'react';
import styled from 'styled-components';

import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Post } from '../../types';
// 分割代入の中でtypescriptの型宣言をしている
type Props = {
  post: Post;
  onDelete: (string) => void;
};
export const Card: FC<Props> = ({ post, onDelete }) => {
  const router = useRouter();

  const { username } = router.query;
  const { user } = useSelector((state: any) => state.user);

  return (
    <SCard key={post._id}>
      {user.username === username && (
        <SDeleteIcon onClick={() => onDelete(post._id)} />
      )}
      <SProfileText key={post._id}>{post.desc}</SProfileText>
    </SCard>
  );
};
const SDeleteIcon = styled(DeleteIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  color: #8d8d8d;
`;
const SCard = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid #dfdfdf;
  padding: 70px 16px;
  height: 250px;
`;
const SProfileText = styled.div`
  font-family: 'Helvetica';
  margin: 0 auto;
  font-size: 20px;
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-wrap: break-word;
`;
