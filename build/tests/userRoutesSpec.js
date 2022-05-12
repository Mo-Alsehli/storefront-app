"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("../server"));
const supertest_1 = __importDefault(require("supertest"));
describe("Testing The User Routes Status", () => {
    it("User Index Should Return A Success Status", () => {
        (0, supertest_1.default)(server_1.default).get('/users').expect(200);
    });
    it("User Create Should Return A Success Status", () => {
        (0, supertest_1.default)(server_1.default).post('/users').send({ firstname: "test", lastname: "testt", username: "test_testt", password: "test123" }).expect(200);
    });
    it("User Index Should Return A Success Status", () => {
        (0, supertest_1.default)(server_1.default).get('/users').expect(200);
    });
    it("User Show Should Return A Success Status", () => {
        (0, supertest_1.default)(server_1.default).get('/users/1').expect(200);
    });
});
