import axios from 'axios';

export const useFollowingsPosts = () => {
  const getFollowingsPosts = async (userId) => {
    try {
      const response = await axios.get(`/api/posts/timeline/${userId}`);

      return response.data.sort((post1, post2) => {
        return (
          new Date(post2.createdAt).valueOf() -
          new Date(post1.createdAt).valueOf()
        );
      });
    } catch (error) {
      console.error('Error fetching timeline posts:', error);
      throw error;
    }
  };
  return { getFollowingsPosts };
};
