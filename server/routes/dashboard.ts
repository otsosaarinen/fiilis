import { Router, Response } from "express";
import {
	authMiddleware,
	AuthenticatedRequest,
} from "./middleware/authMiddleware";
import { findById } from "../../prisma/utils/queries";

const router = Router();

router.get(
	"/",
	authMiddleware,
	async (req: AuthenticatedRequest, res: Response) => {
		try {
			const userId = req.user?.id;
			const response = await findById(userId);

			if (!response) {
				res.status(404).json({ message: "User not found" });
				return;
			}

			res.status(200).json({
				message: "succesful",
				user: {
					firstName: response.firstName,
					lastName: response.lastName,
					email: response.email,
					subscription: response.subscription,
				},
			});
			return;
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: "Something went wrong" });
		}
	},
);

export default router;
