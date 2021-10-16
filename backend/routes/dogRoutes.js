import express from 'express'

const userRoutes = express.Router()

userRoutes.post('/', async () => {})

userRoutes.get('/', async () => {})

userRoutes.get('/:dogID', async () => {})

userRoutes.put('/:dogID', async () => {})

userRoutes.delete('/:dogID', async () => {})

export { userRoutes }
