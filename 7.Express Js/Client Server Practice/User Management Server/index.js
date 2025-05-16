const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3000;


//middlewire use korte hbe
app.use(cors());
app.use(express.json());  // nahole body undefined dekhabe


const users = [
  { id:1, name:'Sabana', email:'sabana@gmail.com' },
  { id:2, name:'Sabnoor', email:'sabnoor@gmail.com' },
  { id:3, name:'Sabila', email:'sabila@gmail.com' },
]

// // this two lines called parser
// //are middleware in an Express.js application that handle incoming data in different formats
// app.use(express.json());
// app.use(express.urlencoded( {extended: true} ));
// app.use(express.static(path.join(__dirname, 'public'))); // shb static files er jonne public e jao
// app.set('view engine', 'ejs');     //ejs page ke render korar jonne drkar hbe

app.get('/', (req, res) => {
  res.send('its working');
  // res.render('index.ejs');      //etar mane / route gele index page open hbe  
});

app.get('/users', (req, res) => {
  res.send(users);
  // res.render('index.ejs');      //etar mane / route gele index page open hbe  
});

// frontend theke pacchi data -> post diye
app.post('/users', (req, res) => {
  console.log('post api hitting');
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
})


app.listen(port, () => {
  console.log('server is running at port 3000')
})