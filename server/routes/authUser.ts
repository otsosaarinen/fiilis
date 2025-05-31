import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import { Router } from "express";
import { authenticateUser } from "../../prisma/utils/queries";

const router = Router();

dotenv.config();

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
			const payload = {
				id: response.id,
			};

			// create constants from environmental variables
			const JWT_SECRET = process.env.JWT_SECRET as string;
			const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

			const token = jwt.sign(payload, JWT_SECRET, {
				expiresIn: Number(JWT_EXPIRES_IN) || "24h",
			});

			res.cookie("token", token, {
				httpOnly: true,
				sameSite: "strict",
				maxAge: 24 * 60 * 60 * 1000,
			})
				.status(200)
				.json({
					message: "User authenticated successfully",
					token,
					user: payload,
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
