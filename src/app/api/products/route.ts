// src/app/api/products/route.ts
import sql from '@/lib/db';

export async function GET(): Promise<Response> {
    try {
        // Query the products table
        const products = await sql`SELECT * FROM playing_with_neon`;

        // Return the result as JSON
        return new Response(JSON.stringify(products), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Database error:', error);
        return new Response('Error fetching data', { status: 500 });
    }
}
