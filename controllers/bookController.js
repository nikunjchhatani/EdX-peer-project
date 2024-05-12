const axios = require('axios');

exports.getBookList = async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/api/books');
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


exports.getBookByISBN = async (req, res) => {
  const isbn = req.params.isbn;
  try {
    const response = await axios.get(`http://localhost:3000/api/books/isbn/${isbn}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};