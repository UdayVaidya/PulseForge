import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import { corsOptions } from './shared/config/corsOptions.js';
import { globalRateLimiter } from './shared/middleware/rateLimiter.js';
import { requestLogger } from './shared/middleware/requestLogger.js';
import { notFound } from './shared/middleware/notFound.js';
import { errorHandler } from './shared/middleware/errorHandler.js';

const app = express();

// ─── Security Middleware ─────────────────────────────────
app.use(helmet());
app.use(cors(corsOptions));
app.use(globalRateLimiter);

// ─── Parsing Middleware ──────────────────────────────────
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());
app.use(compression());

// ─── Logger ─────────────────────────────────────────────
app.use(requestLogger);

// ─── Health Check ────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'PulseForge API is running',
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

// ─── Feature Routes (added progressively each day) ───────
// app.use('/api/v1/auth', authRoutes);      ← Day 2
// app.use('/api/v1/incidents', incidentRoutes);  ← Day 5+

// ─── Error Handling ──────────────────────────────────────
app.use(notFound);
app.use(errorHandler);

export default app;