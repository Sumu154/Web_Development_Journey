import { Model } from "mongoose";
import { Document } from "mongoose";

// Address interface (embedded inside User)
export interface Address {
  street: string;
  city: string;
  postalCode: string;
}

// custom interface for User  ->  method on a document
export interface UserInstanceMethods {
  hashPassword(password: string): Promise<string>;
}


// User interface with embedded Address
export interface IUser extends Document, UserInstanceMethods  {
  userEmail: string;
  userName: string;
  password: string,
  address: Address; // embedded subdocument
}


// Static method interface
export interface UserStaticMethods extends Model<IUser> {
  hashPassword(password: string): Promise<string>
}




