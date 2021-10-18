import { UserModel } from '../database/models/UserModel.js'

class UserController {
  async findAll(req, res) {
    const users = await UserModel.findAll()
    return users.length > 0
      ? res.status(200).json(users)
      : res.status(204).send()
  }

  async findOne(req, res) {
    const { userId } = req.params
    const user = await UserModel.findOne({
      where: {
        id: userId,
      },
    })
    return user ? res.status(200).json(user) : res.status(204).send()
  }

  async create(req, res) {
    const { name, birthDate, cpf } = req.body
    const user = await UserModel.create({
      name,
      birthDate,
      cpf,
    })
    return res.status(201).json(user)
  }

  async update(req, res) {
    const { userId } = req.params
    const { name, birthDate, cpf } = req.body
    await UserModel.update({ name, birthDate, cpf }, { where: { id: userId } })
    return res.status(204).send()
  }

  async delete(req, res) {
    const { userId } = req.params
    await UserModel.destroy({ where: { id: userId } })
    return res.status(204).send()
  }
}

export default new UserController()
