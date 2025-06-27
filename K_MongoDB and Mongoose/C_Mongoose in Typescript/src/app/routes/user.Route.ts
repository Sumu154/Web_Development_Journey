import express from 'express';
import {
  createUser,
} from '../controllers/user.Controller';  // add .js if using ES modules

const router = express.Router();

// create a user -> post
router.post('/users', createUser);

export default router;
