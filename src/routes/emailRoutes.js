import express from "express";
import { handleSendEmail } from "../controller/emailController.js";

const router = express.Router();

router.post("/send", handleSendEmail);

export default router;