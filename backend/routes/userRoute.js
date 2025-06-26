// routes/userRoute.js
import express from 'express';
import { registerUser, loginUser, profileUser } from '../controllers/userController.js';
import protect from '../middleware/authMiddleware.js'; // if using auth

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, profileUser);

export default router;
