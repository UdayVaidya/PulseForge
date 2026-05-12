import app from './src/app.js';
import connectDb from './src/shared/config/db.js';
import config from './src/shared/config/config.js';

const startServer = async () => {
  await connectDb();

  app.listen(config.PORT, () => {
    console.log(`🚀 Server running on port ${config.PORT} [${config.NODE_ENV}]`);
    console.log(`📡 Health: http://localhost:${config.PORT}/api/health`);
  });
};

startServer();