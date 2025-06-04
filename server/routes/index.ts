import { Router } from "express";
import createUserRouter from "./createUser";
import authenticateUserRouter from "./authUser";
import dashboardRouter from "./dashboard";

const router = Router();

router.use("/user/create", createUserRouter);
router.use("/user/auth", authenticateUserRouter);
router.use("/dashboard", dashboardRouter);

export default router;
