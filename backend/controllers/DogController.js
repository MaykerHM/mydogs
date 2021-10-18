import { DogModel } from '../database/models/DogModel.js'

class DogController {
  async findAll(req, res) {}
  async findOne(req, res) {}
  async create(req, res) {
    const { name, userId = null } = req.body
    const dog = await DogModel.create({
      name,
      userId,
    })
    return res.status(201).json(dog)
  }
  async update(req, res) {}
  async delete(req, res) {}
}

export default new DogController()
