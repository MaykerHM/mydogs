import { DogModel } from '../database/models/DogModel.js'

class DogController {
  async findAll(req, res) {
    const dogs = await DogModel.findAll()
    return dogs.length > 0 ? res.status(200).json(dogs) : res.status(204).send()
  }

  async findAllStrayDogs(req, res) {
    const dogs = await DogModel.findAll({
      where: {
        userId: null,
      },
    })
    return dogs.length > 0 ? res.status(200).json(dogs) : res.status(204).send()
  }

  async findOne(req, res) {
    const { dogId } = req.params
    const dog = await DogModel.findOne({
      where: {
        id: dogId,
      },
    })
    return dog ? res.status(200).json(dog) : res.status(204).send()
  }
  async create(req, res) {
    const { name, userId } = req.body
    const dog = await DogModel.create({
      name,
      userId,
    })
    return res.status(201).json(dog)
  }
  async update(req, res) {
    const { dogId } = req.params
    const { name, userId } = req.body
    await DogModel.update({ name, userId }, { where: { id: dogId } })
    return res.status(204).send()
  }

  async delete(req, res) {
    const { dogId } = req.params
    await DogModel.destroy({ where: { id: dogId } })
    return res.status(204).send()
  }
}

export default new DogController()
