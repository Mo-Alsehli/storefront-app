import express, {Request, Response} from 'express';
import {Product, productsStore} from '../models/products';
import dotenv from 'dotenv';
import jwt from "jsonwebtoken";

dotenv.config();
const store = new productsStore();
const tokenSecret: string = process.env.TOKEN_SECRET as unknown as string;

const index = async(req: Request, res: Response)=>{
    try {
        const product = await store.index();
        res.json(product);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}
const create = async(req: Request, res: Response)=>{
    const product: Product = {
        name: req.body.name,
        price: req.body.price
    }
    try {
        const newProduct = await store.create(product);
        const token = jwt.sign({newProduct}, tokenSecret);
        res.json(token);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}
const show = async(req: Request, res: Response)=>{
    const id = req.params.id;
    try {
        const product = await store.show(parseInt(id));
        res.json(product);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}
const deleteProduct = async(req: Request, res: Response)=>{
    const id = req.params.id;
    try {
        const product = await store.delete(parseInt(id));
        res.json(product);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}

const products_routes = (app: express.Application)=>{
    app.get('/products', index);
    app.get('/products/:id', show);
    app.post('/products', create);
    app.delete('/products/:id', deleteProduct);
}

export default products_routes;
