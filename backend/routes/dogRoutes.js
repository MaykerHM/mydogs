import express from 'express'
import DogController from '../controllers/DogController.js'

const dogRoutes = express.Router()

dogRoutes.post('/', DogController.create)

dogRoutes.get('/', DogController.findAll)

dogRoutes.get('/stray', DogController.findAllStrayDogs)

dogRoutes.get('/:dogId', DogController.findOne)

dogRoutes.put('/:dogId', DogController.update)

dogRoutes.delete('/:dogId', DogController.delete)

export { dogRoutes }
