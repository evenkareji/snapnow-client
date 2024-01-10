import { useEffect, useState } from 'react';
import styled from 'styled-components';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { UserIconImg } from '../atoms/UserIconImg';
import handleImages from '../../utils/fileToBase64';
import { useSelector } from '../../redux/store';
import useProfileImageUpload from '../../hooks/useUploadProfileImg';
import { ClipLoader } from 'react-spinners';

export const UserIconWithName = ({ profileUser }) => {
  const [image, setImage] = useState<any>();
  const { user } = useSelector((state) => state.user);
  const {
    profileUpload,
    uploadStatus: { loading },
  } = useProfileImageUpload(user);
  useEffect(() => {
    if (image) {
      profileUpload(image);
    }
  }, [image]);
  const canUpload = user?.username === profileUser.username && !loading;
  return (
    <>
      <SLabel htmlFor="profile_image">
        <SProfileImg src={profileUser.profileImg} canUpload={canUpload} />
        {loading ? (
          <SClipLoader color="#ed6103" loading={true} size={25} />
        ) : (
          canUpload && <SAddCircleIcon />
        )}

        <input
          type="file"
          id="profile_image"
          name="profile_image"
          hidden
          disabled={!canUpload}
          accept="image/jpeg,image/png,image/gif,image/webp"
          onChange={(e) => handleImages(e, setImage)}
        />
      </SLabel>

      <SProfileUserName>{profileUser.username}</SProfileUserName>
    </>
  );
};
const SLabel = styled.label`
  position: relative;
  display: block;
  cursor: pointer;
  width: 160px;
  height: 160px;
  margin: 0 auto 14px;
  @media (min-width: 425px) {
    & {
      width: 180px;
      height: 180px;
    }
  }
`;
const SAddCircleIcon = styled(AddCircleIcon)`
  position: absolute;
  bottom: -8px;
  left: 68%;
  font-size: 35px !important;
  color: #ed6103 !important;
  background: #fff;
  border-radius: 2000px;
`;
const SClipLoader = styled(ClipLoader)`
  position: absolute;
  bottom: -6px;
  left: 70%;
  font-size: 35px !important;
  color: #ed6103 !important;
  background: #fff;
  border-radius: 2000px;
`;
const SProfileImg = styled(UserIconImg)`
  width: 160px;
  height: 160px;
  margin: 0 auto;
  cursor: ${({ canUpload }) => (canUpload ? 'pointer' : 'not-allowed')};
  @media (min-width: 425px) {
    & {
      width: 180px;
      height: 180px;
    }
  }
`;
const SProfileUserName = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 18px;
  text-align: center;
`;
// const Smp = styled.div`
//   color: #545454;
//   margin-bottom: 18px;
//   text-align: center;
// `;
