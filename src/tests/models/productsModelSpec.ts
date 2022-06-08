import { Product, productsStore } from "../../models/products";
import { Client } from "../../database";

const store = new productsStore();

describe("Testing The Methods Exist For Products", () => {
  it("Testing Index Method Exist", () => {
    expect(store.index).toBeDefined();
  });

  it("Testing show Method Exist", () => {
    expect(store.show).toBeDefined();
  });

  it("Testing create Method Exist", () => {
    expect(store.create).toBeDefined();
  });

  it("Testing delete Method Exist", () => {
    expect(store.delete).toBeDefined();
  });
});

describe("Testing Products Model Logic", () => {
  const product = {
    name: "phone",
    price: 200,
  } as Product;

  beforeAll(async () => {
      const create = await store.create(product);
      product.id = create.id;
  });
  afterAll(async () => {
      const conn = await Client.connect();
      const sql = "DELETE FROM products;";
      await conn.query(sql);
      conn.release();
  });
 
  it("Testing Index Method (Getting All Products) For Product Model", async () => {
      const products = await store.index();
      expect(products.length).toBe(1);

  });

  it("Testing Create Method For Products", async () => {
      const newProduct = { name: "car", price: 2000 } as Product;
      const createProduct = (await store.create(newProduct)) as Product;

      expect(createProduct.name).toBe("car");
      expect(createProduct.price).toBe(2000);
  });

  it("Testing Show Method (Getting One Product) For Product Model", async () => {
      const returnedProduct = (await store.show(
        product.id as number
      )) as Product;
      expect(returnedProduct.name).toBe("phone");
      expect(returnedProduct.price).toBe(200);

  });

  it("Testing Delete Method For Products Model", async () => {
      const deleted = (await store.delete(product.id as number + 1)) as Product;
      expect(deleted.id).toBe(product.id as number +1);
      expect(deleted.name).toBe("car");
      expect(deleted.price).toBe(2000);

  });
});
 