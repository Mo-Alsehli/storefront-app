"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../users");
const database_1 = require("../../database");
const store = new users_1.userModel();
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
    it("Testing Authinticate Method Exist", () => {
        expect(store.authinticate).toBeDefined();
    });
    it("Testing delete Method Exist", () => {
        expect(store.delete).toBeDefined();
    });
});
describe("Testing The Logic Of User Model Methods", () => {
    const user = {
        firstname: "mohamed",
        lastname: "magdi",
        username: "mohamed_magdi",
        password: "mohamed123"
    };
    beforeAll(async () => {
        const createUser = await store.create(user);
    });
    afterAll(async () => {
        const conn = await database_1.Client.connect();
        const sql = 'DELETE FROM users;';
        await conn.query(sql);
        conn.release();
    });
    it("Testing Index Method", async () => {
        const users = await store.index();
        expect(users.length).toBe(1);
    });
    it("Testing Create Method", async () => {
        const create = await store.create({
            firstname: "hazem",
            lastname: "reda",
            username: "hazem_reda",
            password: "hazem123"
        });
        expect(create).toEqual({
            id: 2,
            firstname: "hazem",
            lastname: "reda",
            username: "hazem_reda",
            password: "hazem123"
        });
    });
    it("Testing Show Method", async () => {
        const show = await store.show(1);
        expect(show).toEqual({
            id: 1,
            firstname: "mohamed",
            lastname: "magdi",
            username: "mohamed_magdi",
            password: "mohamed123"
        });
    });
    it("Testing Valid Authinticate Method", async () => {
        const validAuthinticate = await store.authinticate('mohamed_magdi', 'mohamed123');
        expect(validAuthinticate).toEqual({
            firstname: "mohamed",
            lastname: "magdi",
            username: "mohamed_magdi",
        });
    });
    it("Testing Unvalid Authinticate Method", async () => {
        const unvalidAuthinticate = await store.authinticate('mahmoud', '4455');
        expect(unvalidAuthinticate).toBeNull();
    });
    it("Testing Delete Method", async () => {
        const deleted = await store.delete('2');
        expect(deleted).toEqual({
            id: 2,
            firstname: "hazem",
            lastname: "reda",
            username: "hazem_reda",
        });
    });
    it("Testing Updata Method", async () => {
        const updatedUser = {
            firstname: "mohamed",
            lastname: "alshli",
            username: "mohamed_alsehli",
            password: "mohamed123",
        };
        const update = await store.update(updatedUser);
        expect(update).toEqual({
            id: 1,
            firstname: "mohamed",
            lastname: "alshli",
            username: "mohamed_alsehli",
        });
    });
});
