"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../models/products");
const store = new products_1.productsStore();
describe("Testing The Methods Exist For Products", () => {
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
