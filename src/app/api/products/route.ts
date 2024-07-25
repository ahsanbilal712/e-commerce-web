// src/app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
import sql from '@/lib/db';

export async function GET(): Promise<Response> {
    try {
        // Query the products table
        const products = await sql`SELECT * FROM products`;

        // Return the result as JSON
        return new Response(JSON.stringify(products), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Database error:', error);
        return new Response('Error fetching data', { status: 500 });
    }
}
export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        // Parse the JSON body from the request
        const body = await request.json();

        // Destructure the properties from the request body
        const {
            name,
            description,
            price,
            stock_quantity,
            category_id,
        } = body;

        // Set current date and time
        const now = new Date().toISOString();

        // Insert the new product into the database
        const result = await sql`
            INSERT INTO products (name, description, price, stock_quantity, category_id, created_at, updated_at)
            VALUES (${name}, ${description}, ${price}, ${stock_quantity}, ${category_id}, ${now}, ${now})
            RETURNING id
        `;

        // Return a success response with the new product ID
        return NextResponse.json({ id: result[0].id }, { status: 201 });
    } catch (error) {
        console.error('Database error:', error);
        return new NextResponse('Error adding product', { status: 500 });
    }
}