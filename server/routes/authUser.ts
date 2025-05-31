import bcrypt from "bcryptjs";

import { Router } from "express";
import { authenticateUser } from "../../prisma/utils/queries";

const router = Router();

router.post("/", async (req, res): Promise<void> => {
	try {
		// extract variables from the payload
		const email = req.body.email;
		const password = req.body.password;

		const response = await authenticateUser({ email });

		if (!response) {
			res.status(404).json({ message: "User not found" });
			return;
		}

		const passwordHash = response?.passwordHash as string;

		const authStatus = await bcrypt.compare(password, passwordHash);

		if (authStatus) {
			console.log("User authenticated successfully");
			res.status(200).json({
				message: "User authenticated successfully",
			});
		} else {
			res.status(401).json({ message: "Incorrect password" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error while logging in" });
		return;
	}
});

export default router;
