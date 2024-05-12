//Task 1 
const axios = require('axios');

exports.getBookList = async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/api/books');
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


//Task 2
exports.getBookByISBN = async (req, res) => {
  const isbn = req.params.isbn;
  try {
    const response = await axios.get(`http://localhost:3000/api/books/isbn/${isbn}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


//Task 3
exports.getBooksByAuthor = async (req, res) => {
  const author = req.params.author;
  try {
    const response = await axios.get(`http://localhost:3000/api/books/author/${author}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};