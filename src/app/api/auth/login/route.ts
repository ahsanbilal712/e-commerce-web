import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../../../../lib/db';
import { eq } from 'drizzle-orm';
import { users } from '../../../../db/schema'; // Adjust the import path if needed

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your_secret_key'; // Use a strong secret key

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        const user = await db
            .select()
            .from(users)
            .where(eq(users.email, email))
            .limit(1);

        if (user.length === 0) {
            return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
        }

        const passwordMatch = await bcrypt.compare(password, user[0].password);

        if (!passwordMatch) {
            return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
        }

        const token = jwt.sign({ userId: user[0].id }, SECRET_KEY, { expiresIn: '1h' });

        return NextResponse.json({ message: 'Login successful', token }, { status: 200 });
    } catch (error) {
        console.error('Error logging in user:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
