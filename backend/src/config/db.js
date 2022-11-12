import mongoose from "mongoose"
import { Sequelize } from "sequelize"

export const sequelize = new Sequelize('bsale_test', 'bsale_test', 'bsale_test', {
  host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  dialect: 'mysql',
  port: 3306,
  logging: false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

export const connectDBMongo = url =>
  mongoose.connect(url).then(() => console.log('Database connected'))

