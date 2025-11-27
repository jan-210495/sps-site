import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import pool from '../db.js';
import { authenticate, authorize } from '../middleware/auth.js';

const uploadDir = process.env.UPLOAD_DIR || 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${unique}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

const router = Router();

router.get('/dashboard', authenticate, authorize('admin', 'media-admin', 'leaders'), async (req, res) => {
  try {
    const [newsRows] = await pool.query('SELECT id, title, body, image, published_at FROM news ORDER BY published_at DESC LIMIT 6');
    const galleryDir = path.resolve('assets/images');
    const gallery = fs
      .readdirSync(galleryDir)
      .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
      .map((file) => ({ path: `assets/images/${file}`, label: file.replace(/[-_]/g, ' ') }));
    res.json({ news: newsRows, gallery });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    res.status(500).json({ message: 'Failed to load data' });
  }
});

router.post(
  '/news',
  authenticate,
  authorize('admin', 'media-admin'),
  body('title').isLength({ min: 3 }),
  body('body').isLength({ min: 10 }),
  body('published_at').isISO8601(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ message: 'Invalid payload', errors: errors.array() });
    }
    const { title, body: summary, image, published_at } = req.body;
    try {
      const [result] = await pool.execute(
        'INSERT INTO news (title, body, image, published_at, author_id) VALUES (?, ?, ?, ?, ?)',
        [title, summary, image, published_at, req.user.id]
      );
      res.status(201).json({ id: result.insertId, title, body: summary, image, published_at });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      res.status(500).json({ message: 'Unable to save post' });
    }
  }
);

router.put(
  '/news/:id',
  authenticate,
  authorize('admin', 'media-admin'),
  body('title').isLength({ min: 3 }),
  body('body').isLength({ min: 10 }),
  body('published_at').isISO8601(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ message: 'Invalid payload', errors: errors.array() });
    }
    const { id } = req.params;
    const { title, body: summary, image, published_at } = req.body;
    try {
      await pool.execute('UPDATE news SET title = ?, body = ?, image = ?, published_at = ? WHERE id = ?', [
        title,
        summary,
        image,
        published_at,
        id,
      ]);
      res.json({ id, title, body: summary, image, published_at });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      res.status(500).json({ message: 'Unable to update post' });
    }
  }
);

router.post('/gallery/upload', authenticate, authorize('admin', 'media-admin'), upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  res.status(201).json({ path: `${uploadDir}/${req.file.filename}` });
});

router.post(
  '/featured',
  authenticate,
  authorize('admin', 'media-admin', 'leaders'),
  body('slot').isIn(['hero', 'gallery']),
  body('image').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ message: 'Invalid payload', errors: errors.array() });
    }
    const { slot, image } = req.body;
    try {
      await pool.execute('REPLACE INTO featured_media (slot, image_path, updated_by) VALUES (?, ?, ?)', [slot, image, req.user.id]);
      res.json({ slot, image });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      res.status(500).json({ message: 'Unable to update featured media' });
    }
  }
);

export default router;
