import mongoose, { Schema, Document, Model } from 'mongoose';

// Define an interface representing a document in MongoDB.
export interface IUser extends Document {
  userEmail: string;
  userName: string;
}

// Create a Schema corresponding to the document interface.
const userSchema: Schema<IUser> = new mongoose.Schema({
  userEmail: { type: String, required: true },
  userName: { type: String, required: true },
});

// Create and export the model.
const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);
export default User;
