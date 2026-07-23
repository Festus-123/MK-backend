
import express from 'express';
import { handleSendEmail } from '../controller/emailController.js';

const router = express.Router();

// This endpoint will be accessed at /api/emails/send
router.post('/send', handleSendEmail);

export default router;