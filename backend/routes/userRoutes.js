import express from 'express'
import UserController from '../controllers/UserController.js'

const userRoutes = express.Router()

userRoutes.post('/', UserController.create)

userRoutes.get('/', UserController.findAll)

userRoutes.get('/:userID', UserController.findOne)

userRoutes.put('/:userID', UserController.update)

userRoutes.delete('/:userID', UserController.delete)

export { userRoutes }
