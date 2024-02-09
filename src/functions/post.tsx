import axios from 'axios';

export const searchPost = async (searchTerm) => {
  try {
    const { data } = await axios.post(`api/posts/search/${searchTerm}`);
    return data.sort((post1, post2) => {
      return (
        new Date(post2.createdAt).valueOf() -
        new Date(post1.createdAt).valueOf()
      );
    });
  } catch (error) {
    return error.response.data.message;
  }
};
