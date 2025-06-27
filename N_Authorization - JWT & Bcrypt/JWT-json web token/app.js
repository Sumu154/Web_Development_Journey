const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

app.use(cookieParser());



const secretKey = 'secret';

app.get('/', (req, res) => {
  const token = jwt.sign( {email: 'sumaiya@gmail.com'}, secretKey, { expiresIn: '1h' });
  console.log(token);
  res.cookie('token', token);
  res.send('done');
});

app.get('/read', (req, res) => {
  console.log(req.cookies.token);
  res.send('reading the token from cookies')
})

// 2. decode -> verify korbe na token ta valid kina
// just data extract korbe
app.get('/decode', (req, res) => {
  const token = req.cookies.token;
  const decoded = jwt.decode(token);

  console.log('decoded the token', decoded);
  res.send('decoded the token');
})

// 3. verify -> verify kore then decode korbe
app.get('/verify', (req, res) => {
  const token = req.cookies.token;
  try{
    const verified = jwt.verify(req.cookies.token, 'secret');
    console.log(verified);
    res.send('well verifying data......');
  } 
  catch(e){
    console.error('Token verification failed:', e.message);
    res.status(401).send('Invalid or expired token');
  }

})

app.listen(3000, () => {
  console.log('server is running at port 3000');
})