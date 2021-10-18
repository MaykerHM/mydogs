import express from 'express'
import DogController from '../controllers/DogController.js'

const dogRoutes = express.Router()

dogRoutes.post('/', DogController.create)

dogRoutes.get('/', DogController.findAll)

dogRoutes.get('/:dogID', DogController.findOne)

dogRoutes.put('/:dogID', DogController.update)

dogRoutes.delete('/:dogID', DogController.delete)

export { dogRoutes }
