import { Request, Response } from 'express';
import { userModel } from '../models/user.Model';
import { userZodSchema } from '../schemas/user.Zod';



export const createUser = async (req: Request, res: Response): Promise<void> => {
  const parsedUser = await userZodSchema.safeParseAsync(req.body);
  if(!parsedUser.success){
    res.status(400).json({ errors: parsedUser.error.flatten() });
    return;
  }

  try{
    const body = parsedUser.data;
    // hashPassword instance method and instance.method korci ekhane 
    // const user = new userModel(body);
    // user.password = await user.hashPassword(user.password);
    // await user.save();

    // hashPassword model based method so model.method korci ekhane
    const password = await userModel.hashPassword(body.password);
    body.password = password;
    const user = await userModel.create(body);


    res.status(201).json(user);
  } 
  catch (e: any){
    res.status(500).json({ message: 'Internal server error', error: e.message });
  }
};
