"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../products");
const database_1 = require("../../database");
const store = new products_1.productsStore();
describe("Testing The Methods Exist", () => {
    it("Testing Index Method Exist", () => {
        expect(store.index).toBeDefined();
    });
    it("Testing show Method Exist", () => {
        expect(store.show).toBeDefined();
    });
    it("Testing create Method Exist", () => {
        expect(store.create).toBeDefined();
    });
    it("Testing delete Method Exist", () => {
        expect(store.delete).toBeDefined();
    });
});
describe("Testing The Logic Of Products Model Methods", () => {
    const product = {
        name: 'phone',
        price: 200
    };
    beforeAll(async () => {
        const createProduct = await store.create(product);
    });
    afterAll(async () => {
        const conn = await database_1.Client.connect();
        const sql = 'DELETE FROM products;';
        await conn.query(sql);
        conn.release();
    });
    it("Testing Index Method", async () => {
        const products = await store.index();
        expect(products.length).toBe(1);
    });
    it("Testing Create Method", async () => {
        const create = await store.create({
            name: 'car',
            price: 2000
        });
        expect(create).toEqual({
            id: 2,
            name: 'car',
            price: 2000
        });
    });
    it("Testing Show Method", async () => {
        const show = await store.show(1);
        expect(show).toEqual({
            id: 1,
            name: 'phone',
            price: 200
        });
    });
    it("Testing Delete Method", async () => {
        const deleted = await store.delete(2);
        expect(deleted).toEqual({
            id: 2,
            name: 'car',
            price: 2000
        });
    });
});
