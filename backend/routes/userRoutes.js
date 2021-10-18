import express from 'express'
import UserController from '../controllers/UserController.js'

const userRoutes = express.Router()

userRoutes.post('/', UserController.create)

userRoutes.get('/', UserController.findAll)

userRoutes.get('/:userId', UserController.findOne)

userRoutes.put('/:userId', UserController.update)

userRoutes.delete('/:userId', UserController.delete)

export { userRoutes }
