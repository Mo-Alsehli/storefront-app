import dotenv from 'dotenv';
import {Pool} from 'pg';
dotenv.config();
let Client: Pool;

// Getting Our Connection Data From .env File.
const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_TEST,
    ENV
} = process.env;
console.log(ENV);

if(ENV === "dev"){
 Client = new Pool({
    host:POSTGRES_HOST,
    database:POSTGRES_DB,
    user:POSTGRES_USER,
    password:POSTGRES_PASSWORD
});
};

if(ENV === "test"){
  Client = new Pool({
    host:POSTGRES_HOST,
    database:POSTGRES_TEST,
    user:POSTGRES_USER,
    password:POSTGRES_PASSWORD
})};

export {Client};


