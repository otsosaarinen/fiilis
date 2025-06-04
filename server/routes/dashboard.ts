import { Router } from "express";
import { authMiddleware } from "./middleware/authMiddleware";

const router = Router();

router.get("/", authMiddleware, async (req, res) => {
	try {
		res.status(200).json({ message: "succesful" });
		return;
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Something went wrong" });
	}
});

export default router;
