import { Router } from "express";
import { authMiddleware } from "./middleware/authMiddleware";

const router = Router();

router.get("/", authMiddleware, async (req, res) => {
	try {
		res.status(200).json({ message: "succesful" });
		return;
	} catch (error) {
		console.log(error);
	}
});

export default router;
