"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../users");
const store = new users_1.userModel();
describe("Testing The Methods Exist For Users", () => {
    it("Testing Index Method Exist", () => {
        expect(store.index).toBeDefined();
    });
    it("Testing show Method Exist", () => {
        expect(store.show).toBeDefined();
    });
    it("Testing create Method Exist", () => {
        expect(store.create).toBeDefined();
    });
    it("Testing Authinticate Method Exist", () => {
        expect(store.authinticate).toBeDefined();
    });
    it("Testing delete Method Exist", () => {
        expect(store.delete).toBeDefined();
    });
});
