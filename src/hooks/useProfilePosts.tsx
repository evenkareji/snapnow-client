import axios from 'axios';

export const useProfilePosts = () => {
  const getProfilePosts = async (username) => {
    try {
      const response = await axios.get(`/api/posts/profile/${username}`);

      return response.data.sort((post1, post2) => {
        return (
          new Date(post2.createdAt).valueOf() -
          new Date(post1.createdAt).valueOf()
        );
      });
    } catch (error) {
      console.error('Error fetching profile posts:', error);
      throw error;
    }
  };
  return { getProfilePosts };
};
