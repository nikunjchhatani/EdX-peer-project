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


//Task 4
exports.getBooksByTitle = async (req, res) => {
  const title = req.params.title;
  try {
    const response = await axios.get(`http://localhost:3000/api/books/title/${title}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


//Task 5
exports.getBookReview = async (req, res) => {
  const isbn = req.params.isbn;
  try {
    const response = await axios.get(`http://localhost:3000/api/books/review/${isbn}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


//Task 8
exports.addBookReview = async (req, res) => {
  try {
    const response = await axios.post('http://localhost:3000/api/books/review', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


//Task 9
exports.deleteBookReview = async (req, res) => {
  const reviewId = req.params.reviewId;
  try {
    const response = await axios.delete(`http://localhost:3000/api/books/review/${reviewId}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
