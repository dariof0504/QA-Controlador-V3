import { Sequelize } from "sequelize";

const db:string = 'controlador_qa_3'
const db_user:string = 'admin'
const db_pwd:string = 'admin'
const db_host:string = 'localhost'

const sqlDB = new Sequelize(db, db_user, db_pwd, {
    host: db_host,
    dialect: 'postgres'
})

export default sqlDB