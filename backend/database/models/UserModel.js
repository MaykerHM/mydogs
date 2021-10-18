import sequelize from 'sequelize'
const { DataTypes } = sequelize
import { db } from '../db.js'

export const UserModel = db.define(
  'users',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'users',
  }
)
