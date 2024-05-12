//Task 6
const axios = require('axios');

exports.registerUser = async (req, res) => {
  try {
    const response = await axios.post('http://localhost:3000/api/users/register', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
