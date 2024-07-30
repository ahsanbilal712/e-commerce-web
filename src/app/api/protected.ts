import { NextApiRequest, NextApiResponse } from 'next';
import authMiddleware from '../../../middleware/auth';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const user = (req as any).user; // Access user information from the request

    res.status(200).json({ message: 'This is a protected route', user });
};

export default authMiddleware(handler);
