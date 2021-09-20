import express from "express";
import { getMessages, postMessage } from "../controllers/messages.js";
const router = express.Router();

// gets localhost:5000/messages/
router.get("/", getMessages);
router.post("/", postMessage);

export default router;
