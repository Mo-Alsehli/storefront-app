import {Client} from '../database';


export type Product = {
    id?:number;
    name:string;
    price:number;
}

export class productsStore {
    // Getting All Existing Products.
    async index(): Promise<Product[]> {
        try {
            const conn = await Client.connect();
            const sql = 'SELECT * FROM products;';
            const result = await conn.query(sql);
            return result.rows;
        } catch (error) {
            console.log(`Couldn't Get Products`);
            throw new Error(`${error}`);
        }
       
    }

    // Creating A New Product.
    async create(p: Product): Promise<Product> {
        try {
            const conn = await Client.connect();
            const sql = 'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *;';
            const result = await conn.query(sql, [p.name, p.price]);
            const product: Product = result.rows[0];
            conn.release();
            return product;
        } catch (error) {
            console.log(`Unable To Create A New Product`);
            throw new Error(`${error}`);
        }
    }

    // Showing A Specific Product.
    async show(id: number): Promise<Product> {
        try {
            const conn = await Client.connect();
            const sql = 'SELECT id, name, price FROM products WHERE id=$1;';
            const reslut = await conn.query(sql, [id]);
            const product: Product = reslut.rows[0];
            return product; 
        } catch (error) {
            console.log(`Unable To Find Product Of Id: ${id}`);
            throw new Error(`${error}`);
        }
    }

    // Deleting A Specific Product.
    async delete(id: number): Promise<Product> {
        try {
            const conn = await Client.connect();
            const sql = 'DELETE FROM products WHERE id=$1 RETURNING id, name, price;';
            const reslut = await conn.query(sql, [id]);
            return reslut.rows[0];
        } catch (error) {
            console.log(`Unable To Delete Product With Id: ${id}`);
            throw new Error(`${error}`);
        }
    }
}