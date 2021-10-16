import { Sequelize } from 'sequelize'
import dbConfig from '../config/database.json'

export const connection = new Sequelize(dbConfig)
