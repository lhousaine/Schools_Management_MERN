import express, { request, response } from 'express';

const apiRouter = () => {
    const routes = express.Router();

    const userRouter = userRouter;

    routes.use('/repositories', repositoryRouter);

    return routes;
};

export default apiRouter;