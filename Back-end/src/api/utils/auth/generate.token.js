import jwt from 'jsonwebtoken';
import config from '../../config/config';

export default function createToken(user) {
    return jwt.sign({
        firstName: user.firstName,
        lastName: user.lastName,
        school: user.school,
        email: user.email,
        isAdmin: user.isAdmin,
    },
    config.JWT_SECRET,
    {
        expiresIn: '48h'
    });
}
