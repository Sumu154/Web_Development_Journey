const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// 1. setting the cookies and read them
// app.get('/', (req, res) => {
//   res.cookie("name", "harsh");
//   res.send('send');
// });
// app.get('/read', (req, res) => {
//   console.log(req.cookies);
//   res.send('this is the read page');
// })



// 2. bcrypt ki kivabe kaj kore -> password encrypt decrypt kore
// const myPlainPassword = 'sumaiya123';
// const saltRounds = 10;

// app.get('/', (req, res) => {
//   bcrypt.genSalt(saltRounds, (err, salt) => {
//     bcrypt.hash(myPlainPassword, salt, (err, hash) => {
//       // store the password in the database
//       console.log(hash);

//       res.send('hiiiiiiiiiiiiiiiiiiii');

//     })
//   })
// });


// const hash = '$2a$10$F8kf9E1w1ihqlnJ1Xgv.u.JAGFdJcB9.vgaKIkaJfEnx41jofRdSK'

// app.get('/compare', (req, res) => {
//   bcrypt.compare(myPlainPassword, hash, (err, result) => {
//       // res === true
//       console.log(result);
//       res.send('comparing the result........');
//   });
// })


//3. jwt -> json web token..ekbar user login korlei ekta token user pabe,,barbar login na kore 
// eita use kore data access korte parbe
  // 1st sign -> token create korte use hoy
app.get('/', (req, res) => {
  const token = jwt.sign({ email: 'sumaiya@gmail.com' }, 'secret', { expiresIn: '1h' });
  console.log(token);
  res.cookie('token', token);
  res.send('done');
})

app.get('/read', (req, res) => {
  console.log(req.cookies.token);
  res.send('reading the token from cookies')
})
  // 2nd verify -> token ta verify+decode..verify kore decode kora data ta diye dibe
  // and shei decode kora data hbe jeta ami sign er time dicilam,,ekhane email dici,,
  // email mandatory na its my choice but but always unique dite hbe  
app.get('/verify', (req, res) => {
  const data = jwt.verify(req.cookies.token, 'secret');
  console.log(data);
  res.send('well verifying data......')
})


app.listen(3000, () => {
  console.log('server is running at port 3000')
})