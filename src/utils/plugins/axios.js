const axios = require('axios')

const api = axios.create({
  baseUrl: 'https://hdpkjgu3s9.execute-api.eu-west-2.amazonaws.com/test/',
  timeout: 5000
})

module.exports = api
