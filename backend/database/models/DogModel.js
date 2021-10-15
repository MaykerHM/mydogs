import { DataTypes } from 'sequelize/types'
import { db } from '../db'
import { UserModel } from './UserModel'

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
