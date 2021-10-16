import express from 'express'

const routes = express.Router()

routes.post('/dogs', async () => {})

routes.get('/dogs', async () => {})

routes.get('/dogs/:dogID', async () => {})

routes.put('/dogs/:dogID', async () => {})

routes.delete('/dogs/:dogID', async () => {})

export default routes
