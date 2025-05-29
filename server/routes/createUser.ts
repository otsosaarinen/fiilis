import bcrypt from "bcryptjs";

import { Router } from "express";
import { createUser } from "../../prisma/utils/queries";
import { SubscriptionType } from "../../generated/prisma";

const router = Router();

router.post("/", async (req, res) => {
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const email = req.body.email;
	const password = req.body.password;
	const createdAt = req.body.createdAt;
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
		await createUser(data);
		res.status(200).json({ message: "User created succesfully" });
	} catch (error) {
		res.status(500).json({ message: "Error while creating an user" });
		console.log(error);
	}
});

export default router;
