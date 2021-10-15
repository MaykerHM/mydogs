import express from 'express'

const router = express.Router()

router.post('/dogs', async () => {})

router.get('/dogs', async () => {})

router.get('/dogs/:dogID', async () => {})

router.put('/dogs/:dogID', async () => {})

router.delete('/dogs/:dogID', async () => {})

export { router }
