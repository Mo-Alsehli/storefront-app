import express, {Request, Response} from 'express';
import {Order, ordersStore} from '../models/orders';

const store = new ordersStore();

const index = async(req: Request, res: Response)=>{
    try {
        const orders = await store.index();
        res.json(orders);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}
const create = async(req: Request, res: Response)=>{
    const order: Order = {
        status: req.body.status,
        userId: req.body.userId
    }
    try {
        const newOrder = await store.create(order);
        res.json(newOrder);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}
const show = async(req: Request, res: Response)=>{
    const id = req.params.id;
    try {
        const order = await store.show(parseInt(id));
        res.json(order);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}
const deleteOrder = async(req: Request, res: Response)=>{
    const id = req.params.id;
    try {
        const order = await store.delete(parseInt(id));
        res.json(order);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}

const addProduct = async(req:Request, res:Response)=>{
    const orderId: string = req.params.id;
    const productId: string = req.body.productId;
    const quantity: number = parseInt(req.body.quantity);
    try {
        const addedProduct = await store.addProduct(quantity, orderId, productId);
        res.json(addedProduct);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}

const orders_routes = (app: express.Application)=>{
    app.get('/orders', index);
    app.get('/orders/:id', show);
    app.post('/orders', create);
    app.delete('/orders/:id', deleteOrder);
    app.post('/orders/:id/products', addProduct);
}

export default orders_routes;
