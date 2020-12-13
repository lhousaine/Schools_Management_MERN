import jwt from 'jsonwebtoken';
import config from '../../config/config';

// eslint-disable-next-line consistent-return
const isAuthenticated = (request, response, next) => {
    try {
        const { authorization } = request.headers;
        if (!authorization || !authorization.startsWith('Bearer')) {
            return response.status(401).send({ message: 'You are not authenticated' });
        }

        const split = authorization.split('Bearer ');
        if (split.length !== 2) {
            return response.status(401).send({ message: 'You are not authenticated' });
        }
        const token = split[1];
        // eslint-disable-next-line consistent-return
        jwt.verify(token, config.JWT_SECRET, (error, decode) => {
            if (decode) {
                request.userInfo = decode;
                next();
            } else {
                return response.status(401).send({ message: 'Invalid Token' });
            }
        });
    } catch (error) {
        return response.status(500).send({ message: 'Invalid Token Error' });
    }
};

export default isAuthenticated;
