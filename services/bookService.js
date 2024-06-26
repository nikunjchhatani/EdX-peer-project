const axios = require('axios');

exports.getBookList = async () => {
  try {
    const response = await axios.get('your_api_endpoint/books');
    return response.data;
  } catch (error) {
    throw error;
  }
};


//Task 10
exports.getAllBooks = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/books');
    return response.data;
  } catch (error) {
    throw error;
  }
};


//Task 11
exports.searchByISBN = (isbn) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:3000/api/books/isbn/${isbn}`)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
};


//Task 12
exports.searchByAuthor = (author) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:3000/api/books/author/${author}`)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
};


//Task 13
exports.searchByTitle = (title) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:3000/api/books/title/${title}`)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
};