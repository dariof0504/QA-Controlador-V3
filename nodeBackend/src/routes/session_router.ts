import { Router } from "express";
import { download_session, execute_session } from "../controllers/session_controller";

export const session_router = Router()

session_router.get('/execute/session/:pk', execute_session)
session_router.get('/download/session/:pk', download_session)
