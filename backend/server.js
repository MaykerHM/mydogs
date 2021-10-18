import express from 'express'
import { userRoutes } from './routes/userRoutes.js'
import { dogRoutes } from './routes/dogRoutes.js'
import { UserModel } from './database/models/UserModel.js'
import { DogModel } from './database/models/DogModel.js'
// import { db } from './database/db.js'

const app = express()

UserModel.sync()
  .then(DogModel.sync())
  .then(
    app.listen(3333, async () => {
      console.log('Running on port 3333')
    })
  )

app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/dogs', dogRoutes)
