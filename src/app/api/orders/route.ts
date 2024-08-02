import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { orders, order_items } from '@/db/schema';

// Define the interface for OrderItem
interface OrderItem {
    itemName: string;
    quantity: number;  // Keep this as number, we'll convert it later
    price: number;     // Keep this as number, we'll convert it later
}

// Define the interface for the request body
interface OrderRequestBody {
    username: string;
    country: string;
    state: string;
    zip: string;
    coupon?: string;
    termsChecked: boolean;
    totalPrice: number; // Keep this as number, we'll convert it later
    items: OrderItem[];
}

export async function GET(request: NextRequest): Promise<NextResponse> {
    try {
        // Query the orders table
        const ordersList = await db.select().from(orders);

        // Fetch order items for each order
        const ordersWithItems = await Promise.all(
            ordersList.map(async (order) => {
                const items = await db
                    .select()
                    .from(order_items)

                return {
                    ...order,
                    items
                };
            })
        );

        // Return the result as JSON
        return NextResponse.json(ordersWithItems);
    } catch (error) {
        console.error('Database error:', error);
        return new NextResponse('Error fetching orders', { status: 500 });
    }
}

// Handle POST requests
export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        // Parse the JSON body from the request
        const body: OrderRequestBody = await request.json();

        // Log the request body for debugging
        console.log('Request Body:', body);

        const { username, country, state, zip, coupon, termsChecked, totalPrice, items } = body;

        // Convert totalPrice and price fields to a string to match schema definition
        const total_price = totalPrice.toString();  // Convert totalPrice to a string

        const now = new Date();  // Use Date object for current time

        // Insert the order into the orders table
        const result = await db
            .insert(orders)
            .values({
                username: username,
                country: country,
                state: state,
                zip: zip,
                coupon: coupon || null,
                terms_checked: termsChecked,
                total_price: total_price,  // Convert totalPrice to a string
                created_at: now,
            })
            .returning({ id: orders.id });

        // Check if the result contains an ID
        if (result.length === 0 || !result[0].id) {
            throw new Error('Failed to insert order');
        }

        const orderId = result[0].id;

        // Insert order items into the order_items table
        await Promise.all(
            items.map(async (item: OrderItem) => {
                await db.insert(order_items).values({
                    order_id: orderId,
                    item_name: item.itemName,
                    quantity: item.quantity.toString(),  // Convert quantity to a string
                    price: item.price.toString(),        // Convert price to a string
                });
            })
        );

        // Return a success response with the new order ID
        return NextResponse.json({ id: orderId }, { status: 201 });
    } catch (error) {
        console.error('Database error:', error);

        // Log detailed error information
        if (error instanceof Error) {
            console.error('Detailed Error:', error.message);
            console.error('Stack Trace:', error.stack);
        }

        return new NextResponse('Error adding order', { status: 500 });
    }
}
