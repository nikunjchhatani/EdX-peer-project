// controllers/bookController.js
const axios = require('axios');

exports.getBookList = async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/api/books');
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
