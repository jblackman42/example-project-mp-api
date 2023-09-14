const express = require('express');
const navigation = express.Router();

//home page
navigation.get('/', (req, res) => {
  res.render('pages/home')
})

module.exports = navigation;