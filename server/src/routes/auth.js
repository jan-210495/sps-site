import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../db.js';

const router = Router();

router.post(
  '/login',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ message: 'Invalid payload', errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      const [rows] = await pool.execute('SELECT id, name, email, role, password_hash FROM users WHERE email = ?', [email]);
      if (!rows.length) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      const user = rows[0];
      const valid = await bcrypt.compare(password, user.password_hash);
      if (!valid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      const token = jwt.sign({ id: user.id, role: user.role, name: user.name }, process.env.JWT_SECRET, { expiresIn: '8h' });
      res.json({ token, role: user.role, name: user.name });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      res.status(500).json({ message: 'Login failed' });
    }
  }
);

export default router;
