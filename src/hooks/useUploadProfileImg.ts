import { useState } from 'react';
import axios from 'axios';
import dataURItoBlob from '../utils/blobConverter';
import { useRouter } from 'next/router';
type State = { loading: boolean; error: string | null; success: boolean };
const useProfileImageUpload = (user) => {
  const router = useRouter();
  const [uploadStatus, setUploadStatus] = useState<State>({
    loading: false,
    error: null,
    success: false,
  });

  const profileUpload = async (image) => {
    if (!user) {
      console.error('user情報がありません');
      setUploadStatus({ ...uploadStatus, error: 'User not found' });
      return;
    }

    const newProfile: { userId: string; profileImg?: string } = {
      userId: user._id,
    };

    if (image) {
      setUploadStatus({ ...uploadStatus, loading: true });
      const postImage = dataURItoBlob(image); // 単一の画像をBlobに変換
      const path = `${user.username}/profileImage`;
      const formData = new FormData();
      formData.append('path', path);
      formData.append('file', postImage);

      try {
        const { data } = await axios.post('/api/upload/uploadImages', formData);
        newProfile.profileImg = data.url.url;
        setUploadStatus({ ...uploadStatus, success: true });
      } catch (err) {
        console.log(err);
        setUploadStatus({ ...uploadStatus, error: err });
        return;
      }

      try {
        await axios.put(`/api/users/${user._id}`, newProfile);
        router.push(`/profile/${user.username}`);
      } catch (err) {
        console.log(err);
        setUploadStatus({ ...uploadStatus, error: err });
        return;
      }
    }

    setUploadStatus({ ...uploadStatus, loading: false });
  };

  return { profileUpload, uploadStatus };
};

export default useProfileImageUpload;
