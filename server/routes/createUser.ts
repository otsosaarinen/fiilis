import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import { Router } from "express";
import { createUser } from "../../prisma/utils/queries";
import { SubscriptionType } from "../../generated/prisma";

const router = Router();

dotenv.config();

router.post("/", async (req, res) => {
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const email = req.body.email;
	const password = req.body.password;
	const createdAt = new Date();
	const subscription = req.body.subscription as SubscriptionType;

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);

	try {
		const data = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			passwordHash: hash,
			createdAt: createdAt,
			subscription: subscription,
		};
		const response = await createUser(data);

		if (response) {
			const payload = {
				id: response.id,
			};

			// create constants from environmental variables
			const JWT_SECRET = process.env.JWT_SECRET as string;
			const JWT_EXPIRES_IN = process.env
				.JWT_EXPIRES_IN as unknown as number;

			const token = jwt.sign(payload, JWT_SECRET, {
				expiresIn: JWT_EXPIRES_IN || "24h",
			});

			res.cookie("token", token, {
				httpOnly: true,
				sameSite: "strict",
				maxAge: 24 * 60 * 60 * 1000,
			})
				.status(200)
				.json({
					message: "User created succesfully",
					token,
					user: payload,
				});
		}
	} catch (error) {
		res.status(500).json({ message: "Error while creating an user" });
		console.log(error);
	}
});

export default router;
