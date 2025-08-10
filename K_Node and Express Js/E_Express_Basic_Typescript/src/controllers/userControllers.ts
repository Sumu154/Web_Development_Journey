import { Request, Response } from 'express';
import userModel from '../models/userModel'; // add .js if ES module

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = req.body;
    const createdUser = await userModel.create(user);
    res.status(200).json(createdUser);
  } catch (e: any) {
    res.status(500).json({ message: 'Internal server error', error: e.message });
  }
};

