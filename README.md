# Storefront Backend Project

## Getting Started

This repo contains a basic Node and Express app to get you started in constructing an API. To get started, clone this repo and run `yarn` in your terminal at the project root.

## Required Technologies
Your application must make use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

## Steps to Completion

### 1. Plan to Meet Requirements

In this repo there is a `REQUIREMENTS.md` document which outlines what this API needs to supply for the frontend, as well as the agreed upon data shapes to be passed between front and backend. This is much like a document you might come across in real life when building or extending an API. 

Your first task is to read the requirements and update the document with the following:
- Determine the RESTful route for each endpoint listed. Add the RESTful route and HTTP verb to the document so that the frontend developer can begin to build their fetch requests. 
#### User Routes:
**Get_Users_Route:** 'http://localhost:3000/users' [Get].  
**Create_User_Route:** 'http://localhost:3000/users' [Post].  
**Show_User_Route:** 'http://localhost:3000/users/:id' [Get].  
**Update_User_Route:** 'http://localhost:3000/users' [patch].  
**Delete_User_Route:** 'http://localhost:3000/users/:id' [delete]. 

#### Product Routes:
**Get_Products_Route:** 'http://localhost:3000/products' [Get].  
**Create_Product_Route:** 'http://localhost:3000/products' [Post].  
**Show_Product_Route:** 'http://localhost:3000/prodcuts/:id' [Get].  
**Delete_Product_Route:** 'http://localhost:3000/prodcts/:id' [delete].  

#### Order Routes:
**Get_Order_Route:** 'http://localhost:3000/orders' [Get].  
**Create_Order_Route:** 'http://localhost:3000/orders' [Post].  
**Show_Order_Route:** 'http://localhost:3000/orders/:id' [Get].  
**Delete_Order_Route:** 'http://localhost:3000/orders/:id' [delete].

#### Adding Product To An Existing Order:
'http://localhost:3000/orders/:id/products' [Post].

#### Getting Users Which Made Orders.
'http://localhost:3000/dashboard/users_orders' [Get].

#### Getting Products In A Specific Order.
'http://localhost:3000/dashboard/products_orders' [Get].

- Design the Postgres database tables based off the data shape requirements. Add to the requirements document the database tables and columns being sure to mark foreign keys.   
##### Design Of Users Table:
Table: users(id SERIAL PRIMARY KEY, first_name VARCHAR(100)  NOT NULL, last_name VARCHAR(100)  NOT NULL, user_name VARCHAR(255)  NOT NULL, password VARCHAR(255)  NOT NULL);
##### Design Of Products Table:
Table: products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    price integer NOT NULL
);
##### Design Of Orders Table:
Table: orders (
    id SERIAL PRIMARY KEY,
    status VARCHAR(15) NOT NULL,
    user_id bigint REFERENCES users(id)  NOT NULL
);
##### Design Of order_products Table:
Table: order_products (
    id SERIAL PRIMARY KEY,
    quantity integer,
    orders_id bigint REFERENCES orders(id),
    products_id bigint REFERENCES products(id)
);

**NOTE** It is important to remember that there might not be a one to one ratio between data shapes and database tables. Data shapes only outline the structure of objects being passed between frontend and API, the database may need multiple tables to store a single shape. 

### 2.  DB Creation and Migrations

Now that you have the structure of the databse outlined, it is time to create the database and migrations. Add the npm packages dotenv and db-migrate that we used in the course and setup your Postgres database. If you get stuck, you can always revisit the database lesson for a reminder. 

You must also ensure that any sensitive information is hashed with bcrypt. If any passwords are found in plain text in your application it will not pass.

### 3. Models

Create the models for each database table. The methods in each model should map to the endpoints in `REQUIREMENTS.md`. Remember that these models should all have test suites and mocks.

### 4. Express Handlers

Set up the Express handlers to route incoming requests to the correct model method. Make sure that the endpoints you create match up with the enpoints listed in `REQUIREMENTS.md`. Endpoints must have tests and be CORS enabled. 

### 5. JWTs

Add JWT functionality as shown in the course. Make sure that JWTs are required for the routes listed in `REQUIUREMENTS.md`.

### 6. QA and `README.md`

Before submitting, make sure that your project is complete with a `README.md`. Your `README.md` must include instructions for setting up and running your project including how you setup, run, and connect to your database. 

Before submitting your project, spin it up and test each endpoint. If each one responds with data that matches the data shapes from the `REQUIREMENTS.md`, it is ready for submission!
