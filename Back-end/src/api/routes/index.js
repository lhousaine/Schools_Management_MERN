import SchoolRouter from './school';
import UserRouter from './user';

const express = require('express');

export default function ApiRouter() {

    const router = express.Router();

    const schoolRouter = SchoolRouter();
    const userRouter = UserRouter();

    router.use('/schools', schoolRouter);
    router.use('/users', userRouter);

    return router;
}
