import express from 'express'

const dogRoutes = express.Router()

dogRoutes.post('/', async () => {})

dogRoutes.get('/', async () => {})

dogRoutes.get('/:userID', async () => {})

dogRoutes.put('/:userID', async () => {})

dogRoutes.delete('/:userID', async () => {})

export { dogRoutes }
