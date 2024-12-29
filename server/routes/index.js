
import { Router } from 'express';
import authRoutes from './auth/authRoutes.js';




const router = Router();

// Import all routes

// Use routes
router.use('/auth', authRoutes);


export default router;