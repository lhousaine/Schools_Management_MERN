import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT || 5000,
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/my-school',
    JWT_SECRET: process.env.JWT_SECRET || 'lhoussaine-secret'
};
