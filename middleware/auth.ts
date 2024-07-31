//middleware / auth.ts
import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your_secret_key'; // Use a strong secret key

const authMiddleware = (handler: NextApiHandler) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Authorization token missing' });
        }

        try {
            const decoded = jwt.verify(token, SECRET_KEY);
            (req as any).user = decoded; // Attach user information to the request object
            return handler(req, res);
        } catch (error) {
            return res.status(401).json({ message: 'Invalid token' });
        }
    };
};

export default authMiddleware;
