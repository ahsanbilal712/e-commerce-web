import { pgTable, text, integer, serial, varchar, boolean, numeric, timestamp } from 'drizzle-orm/pg-core';

// Define the 'orders' table schema
export const orders = pgTable('orders', {
    id: serial('id').primaryKey(),
    username: varchar('username', { length: 255 }).notNull(),
    country: varchar('country', { length: 255 }).notNull(),
    state: varchar('state', { length: 255 }).notNull(),
    zip: varchar('zip', { length: 10 }).notNull(),
    coupon: varchar('coupon', { length: 50 }),
    terms_checked: boolean('terms_checked').notNull(),
    total_price: numeric('total_price').notNull(),
    created_at: timestamp('created_at').notNull().defaultNow(),
});

// Define the 'order_items' table schema
export const order_items = pgTable('order_items', {
    id: serial('id').primaryKey(),
    order_id: serial('order_id').notNull(),  // Ensure this is a foreign key
    item_name: varchar('item_name', { length: 255 }).notNull(),
    quantity: numeric('quantity').notNull(),
    price: numeric('price').notNull(),
});

export const products = pgTable('products', {
    id: serial('id').primaryKey(),
    name: text('name'),
    description: text('description'),
    price: integer('price'),
    stock_quantity: integer('stock_quantity'),
    category_id: integer('category_id'),
    created_at: text('created_at'),
    updated_at: text('updated_at'),
});

export const users = pgTable('users', {
    id: varchar('id').primaryKey(),
    username: varchar('username', { length: 50 }).notNull().unique(),
    email: varchar('email', { length: 100 }).notNull().unique(),
    password: varchar('password', { length: 255 }).notNull(),
    createdAt: timestamp('created_at').defaultNow(),
});