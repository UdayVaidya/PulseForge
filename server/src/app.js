import express from 'express';
const app = express();
import connectDb from "./shared/config/db.js";

app.use(express.json());
connectDb();

// Routes 



export default app;
