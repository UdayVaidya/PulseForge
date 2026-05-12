import mongoose from 'mongoose'
import config from './config.js';

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(config.MONGO_URI, {
      dbName: 'pulseforge',
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);

    mongoose.connection.on('disconnected', () => {
      console.warn('⚠️  MongoDB disconnected');
    });

    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB error:', err);
    });
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDb;