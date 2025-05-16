const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

app.use(cookieParser());



app.get('/', (req, res) => {
  res.send('done');
})

app.listen(3000, () => {
  console.log('server is running at port 3000');
})