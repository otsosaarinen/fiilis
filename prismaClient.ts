import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
	const user = await prisma.user.create({
		data: {
			firstName: "Otso",
			lastName: "Saarinen",
			email: "saarinenotso@gmail.com",
			passwordHash: "123321abccba",
			createdAt: new Date(),
			subscription: "Premium",
		},
	});
	console.log(user);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
