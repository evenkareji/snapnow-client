import axios from 'axios';

export const searchPost = async (searchTerm) => {
  try {
    const { data } = await axios.post(`api/posts/search/${searchTerm}`);
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
