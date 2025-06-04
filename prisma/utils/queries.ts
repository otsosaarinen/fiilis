import { prisma } from "./prisma";
import { SubscriptionType } from "../../generated/prisma";

// type and function for creating a new user
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
	return user;
};

// type and function for fetching user's password hash from the database
type userCredentialsObjects = {
	email: string;
};

export const authenticateUser = async (authData: userCredentialsObjects) => {
	const user = await prisma.user.findUnique({
		where: { email: authData.email },
	});
	return user;
};
