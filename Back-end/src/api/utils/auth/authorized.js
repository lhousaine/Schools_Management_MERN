// eslint-disable-next-line consistent-return
const isAdmin = (request, response, next) => {
    const { userInfo } = request;
    if (userInfo && userInfo.isAdmin) {
        next();
    } else {
        return response.status(403).send({ message: 'Unauthorized' });
    }
};

export default isAdmin;
