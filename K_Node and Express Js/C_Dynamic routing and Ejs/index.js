const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;

// this two lines called parser
//are middleware in an Express.js application that handle incoming data in different formats
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));
app.use(express.static(path.join(__dirname, 'public'))); // shb static files er jonne public e jao
app.set('view engine', 'ejs');     //ejs page ke render korar jonne drkar hbe

 
app.get('/', (req, res) => {
  // res.send('its working');
  res.render('index.ejs');      //etar mane / route gele index page open hbe  
});

// dynamic router : er porer part pabo req.params diye
app.get('/profiles/:username/:age', (req, res) => {
  res.send(`Welcome ${req.params.username} age of ${req.params.age} `)
})

app.listen(port, () => {
  console.log('server is running at port 3000')
})