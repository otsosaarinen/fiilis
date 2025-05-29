import { Router } from "express";
import { createUser } from "../../prisma/utils/queries";
import { SubscriptionType } from "../../generated/prisma";

const router = Router();

router.post("/", async (req, res) => {
	try {
		console.log(req.body);
		const data = {
			firstName: "test",
			lastName: "test",
			email: "test",
			passwordHash: "123321",
			createdAt: new Date("2025-05-29"),
			subscription: SubscriptionType.Premium,
		};
		await createUser(data);
		res.status(200).json({ message: "Request received succesfully" });
	} catch (error) {
		res.status(500).json({ message: "Error while processing the request" });
		console.log(error);
	}
});

export default router;
