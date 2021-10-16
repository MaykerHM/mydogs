import express from 'express'
import { userRoutes } from './routes/userRoutes.js'
import { dogRoutes } from './routes/dogRoutes.js'
import { db } from './database/db.js'

const app = express()

app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/dogs', dogRoutes)

app.listen(3333, async () => {
  await db.sync()
  console.log('Running on port 3333')
})
