import express from 'express'

const routes = express.Router()

routes.post('/users', async () => {})

routes.get('/users', async () => {})

routes.get('/users/:userID', async () => {})

routes.put('/users/:userID', async () => {})

routes.delete('/users/:userID', async () => {})

export default routes
