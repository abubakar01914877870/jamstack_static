const axios = require('axios');
require('dotenv').config()

module.exports = async function() {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}&pageSize=8`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }