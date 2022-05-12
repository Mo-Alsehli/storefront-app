"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("../models/orders");
const store = new orders_1.ordersStore();
const index = async (req, res) => {
    try {
        const orders = await store.index();
        res.json(orders);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
};
const create = async (req, res) => {
    const order = {
        status: req.body.status,
        userId: req.body.userId
    };
    try {
        const newOrder = await store.create(order);
        res.json(newOrder);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
};
const show = async (req, res) => {
    const id = req.params.id;
    try {
        const order = await store.show(parseInt(id));
        res.json(order);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
};
const deleteOrder = async (req, res) => {
    const id = req.params.id;
    try {
        const order = await store.delete(parseInt(id));
        res.json(order);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
};
const addProduct = async (req, res) => {
    const orderId = req.params.id;
    const productId = req.body.productId;
    const quantity = parseInt(req.body.quantity);
    try {
        const addedProduct = await store.addProduct(quantity, orderId, productId);
        res.json(addedProduct);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
};
const orders_routes = (app) => {
    app.get('/orders', index);
    app.get('/orders/:id', show);
    app.post('/orders', create);
    app.delete('/orders/:id', deleteOrder);
    app.post('/orders/:id/products', addProduct);
};
exports.default = orders_routes;
