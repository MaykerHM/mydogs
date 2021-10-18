import { UserModel } from '../database/models/UserModel.js'

class UserController {
  async findAll(req, res) {}
  async findOne(req, res) {}
  async create(req, res) {
    const { name, birthDate, cpf } = req.body
    const user = await UserModel.create({
      name,
      birthDate,
      cpf,
    })
    return res.status(201).json(user)
  }
  async update(req, res) {}
  async delete(req, res) {}
}

export default new UserController()
