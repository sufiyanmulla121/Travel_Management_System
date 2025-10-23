import { Pool } from 'pg'
import dotenv from "dotenv";
import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';



dotenv.config()
// console.log(process.env.DATABASE_NAME); // your variable from .env
// console.log(process.env.DATABASE_HOST); // your variable from .env


export const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  clientMinMessages: 'notice',
});

// export const pool = new Pool({
//   host: process.env.DATABASE_HOST,
//   user: process.env.DATABASE_USERNAME,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE_NAME,
//   port: process.env.DATABASE_PORT,

// })


try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize