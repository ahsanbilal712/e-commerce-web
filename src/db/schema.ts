// src/db/schema.ts
import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';

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
