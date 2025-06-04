import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
	user?: JwtPayload;
}

export const authMiddleware = (
	req: AuthenticatedRequest,
	res: Response,
	next: NextFunction,
): void => {
	const token = req.cookies.token;

	if (!token) {
		res.status(401).json({ message: "Authentication token missing" });
		return;
	}

	try {
		const JWT_SECRET = process.env.JWT_SECRET as string;
		const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

		req.user = decoded;

		next();
	} catch (error) {
		res.status(401).json({ message: "Invalid or expired token" });
		return;
	}
};
