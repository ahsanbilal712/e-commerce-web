import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import db from '../../../../lib/db';
import { eq } from 'drizzle-orm';
import { users } from '../../../../db/schema'; // Adjust the import path if needed

export async function POST(request: Request) {
    try {
        const { username, email, password } = await request.json();

        if (!username || !email || !password) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const existingUser = await db
            .select()
            .from(users)
            .where(eq(users.email, email))
            .limit(1);

        if (existingUser.length > 0) {
            return NextResponse.json({ message: 'Email already exists' }, { status: 409 });
        }

        await db.insert(users).values({
            username,
            email,
            password: hashedPassword,
        });

        return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
    } catch (error) {
        console.error('Error registering user:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
