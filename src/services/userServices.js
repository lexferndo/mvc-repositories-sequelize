const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)

const userRepository = require('../repositories/userRepositories')

class userService{

    static findAll = async (params) => {

        try {
            //Filter User by Role
    
            const filterOptions = {
                attributes: { exclude : ['password']},
                where: {}
            }
    
            const {role} = params
    
            if(role){
                filterOptions.where.role = role
            }
    
            const users = await userRepository.findAll(filterOptions)
            return users
        } catch (error) {
            console.log(error)
        }
    }

    static findOne = async (params) => {
        try {

            const filterOptions = {
                attributes: { exclude : ['password']},
                where: {}
            }
            const {id} = params

            if(id){
                filterOptions.where.id = id
            }

            const users = await userRepository.findOne(filterOptions)
            return users
        } catch (error) {
            console.log(error)
        }
    }

    static create = async (params) => {
        try {
            const { id, email, gender, password, role } = params
            const hashPassword = bcrypt.hashSync(password, salt)

            let payload = {
                id,
                email,
                gender,
                password:hashPassword,
                role
            }

            const users = await userRepository.create(payload)
            return users
        } catch (error) {
            console.log(error)
        }
    }

    static update = async (pathParams, params) => {
        try {
            const {id} = pathParams
            const {email, gender, password, role} = params
            const hashPassword = bcrypt.hashSync(password, salt)

            let payload = {
                id,
                email,
                gender,
                password:hashPassword,
                role
            }

            const users = await userRepository.update(id, payload)
            return users

        } catch (error) {
            console.log(error, '<<<')
        }
    }

    static destroy = async(params) => {
        try {
            const {id} = params
            const users = await userRepository.destroy(id)
            return users
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = userService