// eta ei project er entry file

//express package er shb power express valriabe e ashlo -> express variable ekta function
const express = require('express')       
const app = express()   // shb power app er moddhe anlam
const port = process.env.PORT || 3000;
// router create korte parbo 
// ekhane kono middlewire nai -> server e jokhn request gece seta shoja '/' route e gece..
// app.get('/', (req, res) => {
//   res.send('Hello World')
// })
 
// app.get('/profile', (req, res) => {
//   res.send('my profile in ');
// })


//middlewire -> jokhn server request accept kore okhan theke route e 
// pouchanor agei thekaiye kicu peroform korte chaile middlewire bole
app.use((req, res, next) => {
  console.log('middlewire chalao');
  next();
})

app.use((req, res, next) => {
  console.log('arek bar middlewire chalao');
  next();
})

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/profile', (req, res) => {
  res.send('my profile in ');
})



//error handling in express js
app.get('/about', (req, res, next) => {
  console.log('about myself');
  return next(new Error('Something went wrong')) // eta console e ashce 
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  // res.status(500).send(req)
  res.status(500).send('Something broke!')
})


// form handling and working with the forms
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.listen(port, () => {
  console.log('server is running on PORT : 3000')
})


/* in cmd emn dekhacee ->
middlewire chalao
arek bar middlewire chalao
middlewire chalao
arek bar middlewire chalao
middlewire chalao
arek bar middlewire chalao

jotobar refresh korteci totobar middlewire cholbe then route e jabe
ekta route theke jokhn arek route e jacchi tokhono middlewire choltece
*/