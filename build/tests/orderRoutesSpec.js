"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("../server"));
const supertest_1 = __importDefault(require("supertest"));
describe("Testing The Order Routes Status", () => {
    it("Order Index Should Return A Success Status", () => {
        (0, supertest_1.default)(server_1.default).get('/orders').expect(200);
    });
    it("Order Create Should Return A Success Status", () => {
        (0, supertest_1.default)(server_1.default).post('/orders').send({ status: "complete", userId: 1 });
    });
    it("Order Index Should Return A Success Status", () => {
        (0, supertest_1.default)(server_1.default).get('/orders').expect(200);
    });
    it("Order Show Should Return A Success Status", () => {
        (0, supertest_1.default)(server_1.default).get('/orders/1').expect(200);
    });
});
