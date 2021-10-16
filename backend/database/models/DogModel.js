import { DataTypes } from 'sequelize'
import { db } from '../db.js'
import { UserModel } from './UserModel.js'

export const DogModel = db.define('dog', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

DogModel.belongsTo(UserModel)
