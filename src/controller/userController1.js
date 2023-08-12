const user = require('../models/user')
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 10

const getAllUsers = async (req, res, next) => {
    try {
        const data = await user.findAll({
            attributes: ['id', 'email', 'gender', 'role']
        })

        res.status(200).json({
          message: 'Get All Users',
          data: data
        })
      } catch (error){
        res.status(500).json({
          message: 'Server Error',
          serverMessage: error
        })
        next(error)
      }
}

const getUserbyID = async (req, res, next) => {
    const { id } = req.params
  
    try {
      const data = await user.findOne(
        { where: {id} }, {
        attributes: ['id', 'email', 'gender', 'role']
      })
  
      res.status(200).json({
        message: 'Get User Success',
        data: data
      })
    } catch (error) {
      res.status(500).json({
        message: 'Server Error',
        serverMessage: error
      })
      next(error)
    }
}

const createUser = async (req, res, next) => {
    const { id, email, gender, password, role } = req.body
    const hashPassword = bcrypt.hashSync(password, salt)
  
    try {
      // let values = ( id, email, gender, hashPassword, role )
      await user.create({ id, email, gender, password:hashPassword, role })
      
      res.status(202).json({
        message: 'Create New User Success',
        data:{
          id: id,
          email: email,
          gender: gender,
          password: hashPassword,
          role:role
        }
      })
    } catch (error) {
      res.status(500).json({
        message: 'Server Error',
        serverMessage: error
      })
      next(error)
    }
}

module.exports={
    getAllUsers,
    getUserbyID,
    createUser
}