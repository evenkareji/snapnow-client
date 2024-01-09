import axios from 'axios';

export const searchUser = async (searchTerm) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/users/search/${searchTerm}`,
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
export const searchFollowingUser = async (user, searchTerm) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/users/followings/search/${searchTerm}
`,
      { user },
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
export const searchFollowerUser = async (user, searchTerm) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/users/followers/search/${searchTerm}
`,
      { user },
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
