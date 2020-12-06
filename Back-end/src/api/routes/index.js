import SchoolRouter from './school';
import UserRouter from './user';
import HelloRouter from './hello';

const express = require('express');

export default function ApiRouter() {

    const router = express.Router();

    const helloRouter = HelloRouter();
    const schoolRouter = SchoolRouter();
    const userRouter = UserRouter();

    router.get('/greeting', async (req, res) => {
        res.status(200).json({ message: 'Hello world' });
    });

    router.use('/hello', helloRouter);
    router.use('/schools', schoolRouter);
    router.use('/users', userRouter);

    return router;
}
