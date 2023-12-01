import axios from 'axios';
import getToken from '../utils/getToken';

const useDeletePost = (setPosts) => {
  const handleDelete = async (postId) => {
    const token = getToken();
    const config = { headers: { Authorization: `Bearer ${token}` } };

    try {
      if (window.confirm('本当に削除しますかー？いいの？ほんき？ええ！？')) {
        await axios.delete(`/api/posts/${postId}`, config);

        setPosts((currentPosts) =>
          currentPosts.filter((post) => post._id !== postId),
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  return { handleDelete };
};

export default useDeletePost;
