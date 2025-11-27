import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import mediaRoutes from './routes/media.js';

dotenv.config();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uploadsDir = path.resolve(process.env.UPLOAD_DIR || 'uploads');

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN?.split(',') || [],
    credentials: true,
  })
);
app.use(express.json());
app.use('/uploads', express.static(uploadsDir));

app.use('/api/auth', authRoutes);
app.use('/api/media', mediaRoutes);

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API running on port ${port}`);
});
