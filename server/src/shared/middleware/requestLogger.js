import morgan from 'morgan';
import config from '../config/config.js';

export const requestLogger = morgan(
  config.NODE_ENV === 'development' ? 'dev' : 'combined'
);