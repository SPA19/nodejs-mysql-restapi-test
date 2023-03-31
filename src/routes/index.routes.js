import { Router } from "express";
import { ping } from "../controllers/index.controller.js";

const router = Router();

router.get("/saludo", ping);

export default router;
