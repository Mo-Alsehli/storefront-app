"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("../server"));
const supertest_1 = __importDefault(require("supertest"));
describe("Testing The Product Routes Status", () => {
    it("Product Index Should Return A Success Status", () => {
        (0, supertest_1.default)(server_1.default).get('/prodcuts').expect(200);
    });
    it("Product Create Should Return A Success Status", () => {
        (0, supertest_1.default)(server_1.default).post('/produts').send({ name: "test_product", price: 20 });
    });
    it("Product Index Should Return A Success Status", () => {
        (0, supertest_1.default)(server_1.default).get('/products').expect(200);
    });
    it("Product Show Should Return A Success Status", () => {
        (0, supertest_1.default)(server_1.default).get('/products/1').expect(200);
    });
});
