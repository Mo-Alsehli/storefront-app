import app from '../server';
import supertest from 'supertest';

describe("Testing The Product Routes Status", ()=>{
        it("Product Index Should Return A Success Status", ()=>{
            supertest(app).get('/prodcuts').expect(200);
        });

        it("Product Create Should Return A Success Status", ()=>{
            supertest(app).post('/produts').send({name: "test_product", price: 20 });
        });

        it("Product Index Should Return A Success Status", ()=>{
            supertest(app).get('/products').expect(200);
        });

        it("Product Show Should Return A Success Status", ()=>{
            supertest(app).get('/products/1').expect(200);
        });
})