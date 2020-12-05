import express, { request, response } from 'express';
import UserController from '../controllers/UserController';

export default function UserRouter() {

    const router = express.Router();

    const userController = UserController();

    router.route('/')
        .get(userController.getAllUsers);

    router.route('/sign-up')
        .post(userController.SignInUser());

    router.route('/sign-up')
        .post(userController.SignUpUser());
        
    return router;
}
