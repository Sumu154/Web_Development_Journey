const express = require('express');
const path = require('path');
const cors = require('cors');
const userModel = require('./models/user')

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');  

// this two lines called parser
//are middleware in an Express.js application that handle incoming data in different formats
app.use(cors());
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));
app.use(express.static(path.join(__dirname, 'public'))); // shb static files er jonne public e jao



app.get('/', (req, res) => {
  res.render('index');
})


// C -> create operation -> post
app.post('/users', async (req, res) => {
  console.log('post api hitting');
  console.log(req.body);

  const user = req.body;
  let createdUser = await userModel.create(user);
  res.send(createdUser);
})


// R -> read operation -> get
app.get('/users', async (req, res) => {
  const users = await userModel.find();
  res.send(users);
})


// // U -> update operation -> put
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, image } = req.body;

  let updatedUser = await userModel.findByIdAndUpdate(
    id,
    { name, email, image },
    { new: true },
  )

  res.json(updatedUser);
})


// D -> delete route -> delete
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);

  const deletedUser = await userModel.findByIdAndDelete(id);
  res.json(`is deleted`);
})


app.listen(port, () => {
  console.log(`server is running at port ${port} `)
})