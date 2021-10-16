import express from 'express'

const dogRoutes = express.Router()

dogRoutes.post('/users', async () => {})

dogRoutes.get('/users', async () => {})

dogRoutes.get('/users/:userID', async () => {})

dogRoutes.put('/users/:userID', async () => {})

dogRoutes.delete('/users/:userID', async () => {})

export { dogRoutes }
