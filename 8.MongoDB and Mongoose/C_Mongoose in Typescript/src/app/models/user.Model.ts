import mongoose, { Schema, Document, Model } from 'mongoose';
import { IUser, UserStaticMethods, UserInstanceMethods } from '../interfaces/user.Interface';

import validator from 'validator';
import bcrypt from 'bcryptjs';



// 1. Embedded address schema
const addressSchema = new Schema({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
}, { _id: false }); // Prevent _id in embedded schema


// 2. Main User schema
export const userSchema = new mongoose.Schema<IUser, UserStaticMethods, UserInstanceMethods>({
  userEmail: {
    type: String,
    required: true,
    // zod use korle ei validation lagbe na
    validate: [validator.isEmail, "Invalid email address"],
  },
  userName: {
    type: String,
    required: [true, "username lagbe"],
    unique: true,
    maxlength: 11,
    minlength: 4,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: addressSchema,
    required: true,
  },
});


// custom interafce hashing password
userSchema.method("hashPassword", async function (plainPassword: string){
  const password = await bcrypt.hash(plainPassword, 10)
  return password;
})

// Static method
userSchema.static("hashPassword", async function (plainPassword: string){
  const password = await bcrypt.hash(plainPassword, 10)
  return password;
})


// -------Mongoose middlewares-------
// pre-save
userSchema.pre('save', function (next) {
  console.log('[pre-save] - About to save user document...');
  next();
});

// post-save
userSchema.post('save', function (doc) {
  console.log('[post-save] - User document saved:', doc._id);
});



// Export the model
export const userModel = mongoose.model<IUser, UserStaticMethods>('User', userSchema);