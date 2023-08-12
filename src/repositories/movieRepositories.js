const movie = require('../models/movie')

class movieRepository {
    
    static findAll = async (params = {}) => {
        try {
            const movies = await movie.findAll(params)
            return movies
        } catch (error) {
            console.log(err, '<<')
        }
    }

    static findOne = async () => {
        try {
            const movies = await movie.findOne({
                where: {
                    id
                }
            })

            return movies
        } catch (error) {
            console.log(error, '<<')
        }
    }

    static create = async (payload) => {
        try {
            const movies = await movie.create(payload)

            return movies
        } catch (error) {
            console.log(error, '<<')
        }
    }

    static update = async (id, payload) => {
        try {
            const movies = await movie.update(payload, {
                where:{
                    id
                }
            })
            return movies
        } catch (error) {
            console.log(error, '<<')
        }
    }

    static destroy = async (id) => {
        try {
            const movies = await movie.destroy({
                where:{
                    id
                }
            })

            return movies
        } catch (error) {
            console.log(error, '<<')
        }
    }
}

module.exports = movieRepository