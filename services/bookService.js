const axios = require('axios');

exports.getBookList = async () => {
  try {
    const response = await axios.get('your_api_endpoint/books');
    return response.data;
  } catch (error) {
    throw error;
  }
};
