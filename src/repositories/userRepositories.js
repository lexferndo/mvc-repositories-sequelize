const user = require('../models/user')

class userRepository {

    static findAll = async (params ={}) => {
        try {
            const users = await user.findAll(params)
            return users
        } catch (error) {
            console.log(error, '<<<')
        }
    }

    static findOne = async (params= {}) => {
        try {
            const users = await user.findOne(params)
            return users
        } catch (error) {
            console.log(error, '<<<')
        }
    }

    static create = async (payload) => {
        try {
            const users = await user.create(payload)
            console.log(payload)
            return users
        } catch (error) {
            console.log(error, '<<<')
        }
    }


    static update = async (id, payload) => {
        try {
            const users = await user.update(payload, {
                where:{
                    id
                }
            })

            return users
        } catch (error) {
            console.log(error)
        }
    }

    static destroy = async (id) => {
        try {
            const users = await user.destroy({
                where: {
                    id
                }
            })
            return users
        } catch (error) {
            console.log(error, '<<<')
        }
    }
}

module.exports = userRepository