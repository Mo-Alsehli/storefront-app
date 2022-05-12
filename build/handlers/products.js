"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../models/products");
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const store = new products_1.productsStore();
const tokenSecret = process.env.TOKEN_SECRET;
const index = async (req, res) => {
    try {
        const product = await store.index();
        res.json(product);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
};
const create = async (req, res) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    try {
        const newProduct = await store.create(product);
        const token = jsonwebtoken_1.default.sign({ newProduct }, tokenSecret);
        res.json(token);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
};
const show = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await store.show(parseInt(id));
        res.json(product);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
};
const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await store.delete(parseInt(id));
        res.json(product);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
};
const products_routes = (app) => {
    app.get('/products', index);
    app.get('/products/:id', show);
    app.post('/products', create);
    app.delete('/products/:id', deleteProduct);
};
exports.default = products_routes;
