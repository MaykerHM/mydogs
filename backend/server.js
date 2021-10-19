import express from 'express'
import cors from 'cors'
import { userRoutes } from './routes/userRoutes.js'
import { dogRoutes } from './routes/dogRoutes.js'
import { UserModel } from './database/models/UserModel.js'
import { DogModel } from './database/models/DogModel.js'

const app = express()

const dbAndServer = async () => {
  await UserModel.sync()
  await DogModel.sync()
  await app.listen(3333, async () => {
    console.log('Running on port 3333')
  })
}

dbAndServer()

app.use(cors())
app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/dogs', dogRoutes)
