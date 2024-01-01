import axios from 'axios';

export const searchUser = async (searchTerm) => {
  try {
    const { data } = await axios.post(`api/users/search/${searchTerm}`);
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
