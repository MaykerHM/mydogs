import express from 'express'

const userRoutes = express.Router()

userRoutes.post('/dogs', async () => {})

userRoutes.get('/dogs', async () => {})

userRoutes.get('/dogs/:dogID', async () => {})

userRoutes.put('/dogs/:dogID', async () => {})

userRoutes.delete('/dogs/:dogID', async () => {})

export { userRoutes }
