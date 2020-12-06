import UserController from '../controllers/UserController';

const express = require('express');

export default function UserRouter() {

    const router = express.Router();

    const userController = UserController();

    router.route('/')
        .get(userController.getAllUsers);

    router.route('/sign-up')
        .post(userController.SignUpUser);

    router.route('/sign-in')
        .post(userController.SignInUser);

    return router;
}
