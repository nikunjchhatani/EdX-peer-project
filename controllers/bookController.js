
const bookService = require('../services/bookService');

exports.getBookList = async (req, res) => {
  try {
    const books = await bookService.getBookList();
    res.json(books);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
