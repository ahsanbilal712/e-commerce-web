// src/db/schema.ts
import { pgTable, serial, text, integer, varchar, timestamp } from 'drizzle-orm/pg-core';

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