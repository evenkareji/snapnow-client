import axios from 'axios';

export const useLikesPosts = () => {
  const getLikesPosts = async (userId) => {
    try {
      const response = await axios.get(`/api/posts/likes/${userId}`);

      return response.data.sort((post1, post2) => {
        return (
          new Date(post2.createdAt).valueOf() -
          new Date(post1.createdAt).valueOf()
        );
      });
    } catch (error) {
      console.error('Error fetching likes posts:', error);
      throw error;
    }
  };
  return { getLikesPosts };
};
