// src/db/schema.ts
import { pgTable, serial, text, integer, varchar, timestamp, decimal } from 'drizzle-orm/pg-core';

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
    id: serial('id').primaryKey(),
    username: varchar('username', { length: 50 }).notNull().unique(),
    email: varchar('email', { length: 100 }).notNull().unique(),
    password: varchar('password', { length: 255 }).notNull(),
    createdAt: timestamp('created_at').defaultNow(),
});

export const orders = pgTable('orders', {
    id: serial('id').primaryKey(),
    username: varchar('username', { length: 250 }).notNull(),
    total_price: decimal('total_price', { precision: 10, scale: 2 }).notNull(),
    order_status: varchar('order_status', { length: 50 }).default('Pending'),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow()
});
