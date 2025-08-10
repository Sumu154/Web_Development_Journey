const express = require('express');
const userModel = require('./usermodel');   //userModel e sshb power chole ashce,,ei model diyei shb kaj korbo

const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('hello world!');
})


app.get('/create', async (req, res) => {
  let createdUser = await userModel.create({
    username: 'Sumaiya',    
    name: 'Sumaiya Tasnim',   
    email: 'sumaiyatasnim@gmail.com',   
  })

  res.send(createdUser);
})

app.get('/update', async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate(
    {username: 'Sumaiya', },       // Filter: find user with this username
    {name: 'Mst Sumaiya Tasnim'},     // Update: set new name
    { new: true },         // Options: return updated document
  );

  res.send(updatedUser);
})


// find -> shb user ber kore diye dibe..array er moddhe object akare
// app.get('/read', async (req, res) => {
//   let users = await userModel.find();

//   res.send(users);
// })

// findOne -> Sumaiya username er first document dibe
app.get('/read', async (req, res) => {
  let users = await userModel.find({username: 'Sumaiya'});

  res.send(users);
})


app.get('/delete', async (req, res) => {
  let deletedUser = await userModel.findOneAndDelete({username: 'Sumaiya'});
  res.send(deletedUser);
})

app.listen(port, () => {
  console.log(`server is running at port ${port}`)
})