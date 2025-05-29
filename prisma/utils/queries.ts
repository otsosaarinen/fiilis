import { prisma } from "./prisma";
import { SubscriptionType } from "../../generated/prisma";

export const findAllUsers = async () => {
	const users = await prisma.user.findMany();
	console.log(users);
};

type userObject = {
	firstName: string;
	lastName: string;
	email: string;
	passwordHash: string;
	createdAt: Date;
	subscription: SubscriptionType;
};

export const createUser = async (userData: userObject) => {
	const user = await prisma.user.create({ data: userData });
	console.log(user);
};
