import { Sequelize } from 'sequelize'
import dbConfig from '../config/database.json'

export const db = new Sequelize(dbConfig)
