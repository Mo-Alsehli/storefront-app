import { ordersStore } from '../models/orders';

const store = new ordersStore();

describe("Testing The Methods Exist For Orders", ()=>{
    it("Testing Index Method Exist", ()=>{
        expect(store.index).toBeDefined();
    });

    it("Testing show Method Exist", ()=>{
        expect(store.show).toBeDefined();
    });

    it("Testing create Method Exist", ()=>{
        expect(store.create).toBeDefined();
    });

    it("Testing delete Method Exist", ()=>{
        expect(store.delete).toBeDefined();
    });
});
