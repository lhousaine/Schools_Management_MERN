import UserController from '../controllers/UserController';
import isAuthenticated from '../utils/auth/authenticated';
import isAdmin from '../utils/auth/authorized';

const express = require('express');

export default function UserRouter() {

    const router = express.Router();

    const userController = UserController();

    router.get('/', isAuthenticated, isAdmin, userController.getAllUsers);

    router.post('/sign-up', userController.SignUpUser);

    router.post('/sign-in', userController.SignInUser);

    return router;
}
