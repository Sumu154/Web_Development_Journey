import { model, Schema } from "mongoose"
import { IUser } from "./user.interface"


const userSchema = new Schema<IUser>({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
}, {
  timestamps: true,
  versionKey: false
})

export const userModel = model<IUser>("User", userSchema)