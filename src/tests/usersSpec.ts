import {User, userModel} from '../models/users';
import {Client} from '../database';

const store = new userModel();

describe("Testing The Methods Exist For Users", ()=>{
    it("Testing Index Method Exist", ()=>{
        expect(store.index).toBeDefined();
    });

    it("Testing show Method Exist", ()=>{
        expect(store.show).toBeDefined();
    });

    it("Testing create Method Exist", ()=>{
        expect(store.create).toBeDefined();
    });

    it("Testing Authinticate Method Exist", ()=>{
        expect(store.authinticate).toBeDefined();
    });

    it("Testing delete Method Exist", ()=>{
        expect(store.delete).toBeDefined();
    });
});


/* describe("Creating User Model Logic" , async ()=>{
    const user = {
        firstname: "mohamed",
        lastname: "magdi",
        username: "mohamed_magdi",
        password: "mohamed123"
    } as User

    beforeAll(async()=>{
        const create = store.create(user);
        
    })
    afterAll(async()=>{
        const conn = await Client.connect();
        const sql = 'DELETE FROM users;';
        await conn.query(sql);
    })
    it("Testing Create Method For Users", async()=>{
        const create = await store.create({firstname: "hazem", lastname: "reda", username: "hazem_reda", password: "hazem123"});
        expect(create).toEqual({id: 2, firstname: "hazem", lastname: "reda", username: "hazem_reda", password: "hazem123"});
    });
});
 */
