import { BadRequestException, Injectable } from '@nestjs/common';
import { createUserZodSchema } from './user.validation';
import { IUser } from './user.interface';
import { userModel } from './user.model';

@Injectable()
export class UserService {
  async createUser(payload: any): Promise<IUser> {
    // Validate input using Zod
    const parsed = createUserZodSchema.safeParse(payload);
    if(!parsed.success) {
      throw new BadRequestException(parsed.error);
    }

    // Check if email already exists
    const existingUser = await userModel.findOne({ email: parsed.data.email });
    if(existingUser){
      throw new BadRequestException('Email already exists');
    }

    // Create and save new user
    const newUser = await userModel.create(payload);
    return newUser

  }


  // Get all users (GET)
  async getUsers(): Promise<IUser[]> {
    const users = await userModel.find().exec();
    return users;
  }

}
