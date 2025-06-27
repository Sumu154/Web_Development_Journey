const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://sumaiyatasnim5548:oxv0gXT2Yv0RNaBQ@cluster0.d0ab4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { // Increase timeout to 50 seconds
// })
// .then(() => console.log("Connected to MongoDB Atlas"))
// .catch(err => console.error("Failed to connect to MongoDB Atlas", err));

const connectDB = async () => {
  try{
    await mongoose.connect('mongodb+srv://sumaiyatasnim5548:oxv0gXT2Yv0RNaBQ@cluster0.d0ab4.mongodb.net/Server-Client-Mongoose-Practice?retryWrites=true&w=majority&appName=Cluster0');    
    console.log('Connected to MongoDB Atlas');
  }
  catch(e){
    console.error('Failed to connect to MongoDB Atlas')
  }
}
connectDB();

module.exports = connectDB;
