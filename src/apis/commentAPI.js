import axios from 'axios';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/comments';

const commentAPI = {
  getComments: async (page) => {
    try {
      const response = await axios.get(
        `${API_ENDPOINT}?_page=${page}&_limit=10`,
      );

      return response.data;
    } catch (e) {
      return e;
    }
  },
};

export default commentAPI;
