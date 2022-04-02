import { Router } from 'express';
import UserController from '../controllers/user';

const router = Router();
const userController = new UserController();

router.get('/users', userController.getAllUsers);

export default router;
