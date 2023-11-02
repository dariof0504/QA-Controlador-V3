import { Sequelize } from "sequelize";
import { config } from 'dotenv'

config()

const db = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_pwd = process.env.DB_PWD;
const db_host = process.env.DB_HOST;

const sqlDB = new Sequelize(db as string, db_user as string, db_pwd as string, {
  host: db_host,
  dialect: "postgres",
});

export default sqlDB;
