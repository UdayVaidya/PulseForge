// server/src/shared/config/config.js
import dotenv from 'dotenv';
dotenv.config();

const config = {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    MONGO_URI: process.env.MONGO_URI,
    CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:5173',
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '3d',
};

if (!config.MONGO_URI) {
    console.error('MONGO_URI is required');
    process.exit(1);
}

if (!config.JWT_SECRET) {
    console.error('JWT_SECRET is required');
    process.exit(1);
}

if (!config.CLIENT_URL) {
    console.error('CLIENT_URL is required');
    process.exit(1);
}

if (!config.PORT) {
    console.error('PORT is required');
    process.exit(1);
}

if (!config.NODE_ENV) {
    console.error('NODE_ENV is required');
    process.exit(1);
}

if (!config.JWT_EXPIRES_IN) {
    console.error('JWT_EXPIRES_IN is required');
    process.exit(1);
}


export default config;
