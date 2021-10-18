import sequelize from 'sequelize'
const { Sequelize } = sequelize
import dbConfig from '../config/database.js'

export const db = new Sequelize(dbConfig)
