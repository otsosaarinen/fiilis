import { Router } from "express";
import createUserRouter from "./createUser";
import authenticateUserRouter from "./authUser";

const router = Router();

router.use("/user", createUserRouter);
router.use("/auth", authenticateUserRouter);

export default router;
