import { Router } from "express";
import ControllerClients from "../controllers/clients";

const router = Router();

router.get("/", ControllerClients.getAllClients);

export default router;
