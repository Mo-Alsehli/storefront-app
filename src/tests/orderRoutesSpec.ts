import app from '../server';
import supertest from 'supertest';

describe("Testing The Order Routes Status", ()=>{
        it("Order Index Should Return A Success Status", ()=>{
            supertest(app).get('/orders').expect(200);
        });

        it("Order Create Should Return A Success Status", ()=>{
            supertest(app).post('/orders').send({status: "complete", userId: 1 });
        });

        it("Order Index Should Return A Success Status", ()=>{
            supertest(app).get('/orders').expect(200);
        });

        it("Order Show Should Return A Success Status", ()=>{
            supertest(app).get('/orders/1').expect(200);
        });
})