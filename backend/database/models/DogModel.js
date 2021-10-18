import sequelize from 'sequelize'
import { db } from '../db.js'
import { UserModel } from './UserModel.js'
const { DataTypes } = sequelize

export const DogModel = db.define(
  'dogs',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: { model: 'users', key: 'id' },
    },
  },
  {
    tableName: 'dogs',
  }
)

UserModel.hasMany(DogModel)
DogModel.belongsTo(UserModel)
