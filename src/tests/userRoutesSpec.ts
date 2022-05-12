import app from '../server';
import supertest from 'supertest';

describe("Testing The User Routes Status", ()=>{
        it("User Index Should Return A Success Status", ()=>{
            supertest(app).get('/users').expect(200);
        });

        it("User Create Should Return A Success Status", ()=>{
            supertest(app).post('/users').send({firstname: "test", lastname: "testt", username: "test_testt", password: "test123"}).expect(200);
        });

        it("User Index Should Return A Success Status", ()=>{
            supertest(app).get('/users').expect(200);
        });

        it("User Show Should Return A Success Status", ()=>{
            supertest(app).get('/users/1').expect(200);
        });
});