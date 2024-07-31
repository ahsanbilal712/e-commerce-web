//src/app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { products } from '@/db/schema';

export async function GET(): Promise<NextResponse> {
    try {
        // Query the products table
        const productsList = await db.select().from(products);

        // Return the result as JSON
        return NextResponse.json(productsList);
    } catch (error) {
        console.error('Database error:', error);
        return new NextResponse('Error fetching data');
    }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        // Parse the JSON body from the request
        const body = await request.json();

        const { name, description, price, stock_quantity, category_id } = body;

        const now = new Date().toISOString();

        const result = await db.insert(products).values({
            name: name,
            description: description,
            price: price,
            stock_quantity: stock_quantity,
            category_id: category_id,
            created_at: now,
            updated_at: now
        }).returning();  // Ensure 'id' is a valid field to return

        // Return a success response with the new product ID
        return NextResponse.json({ id: result[0].id }, { status: 201 });
    } catch (error) {
        console.error('Database error:', error);
        return new NextResponse('Error adding product', { status: 500 });
    }
}
