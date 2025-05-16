const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://sumaiyatasnim5548:oxv0gXT2Yv0RNaBQ@cluster0.d0ab4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { // Increase timeout to 50 seconds
// })
// .then(() => console.log("Connected to MongoDB Atlas"))
// .catch(err => console.error("Failed to connect to MongoDB Atlas", err));

const connectToDatabase = async () => {
  try{
    await mongoose.connect('mongodb+srv://sumaiyatasnim5548:oxv0gXT2Yv0RNaBQ@cluster0.d0ab4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');    
    console.log('Connected to MongoDB Atlas');
  }
  catch(e){
    console.error('Failed to connect to MongoDB Atlas')
  }
}
connectToDatabase();




const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String
});

// model creation // User nam dici model hbe users namer
module.exports = mongoose.model("User", userSchema);



