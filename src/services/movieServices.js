const movieRepository = require('../repositories/movieRepositories')

class movieService {
    
    static findAll = async (params) => {
        try {
            //Filter Movie by Genres

            const filterOptions = {
                where:{}
            }

            const {genres} = params

            if(genres) {
                filterOptions.where.genres = genres
            } 
            
            const movies = await movieRepository.findAll(filterOptions)
            return movies
        } catch (error) {
            console.log(error, '<<<')
        }
    }

    static findOne = async (params) => {
        try {
            const {id} = params

            const movies = await movieRepository.findOne(id)

            return movies
        } catch (error) {
            console.log(error, '<<<')
        }
    }

    static create = async (fileImage, params) => {
        try {
            const {id, title, genres, year, photo} = params
            let payload = {
                id,
                title,
                genres,
                year,
                photo
            }

            if(fileImage){
                let linkImage = `http://localhost:3000/upload/${fileImage.filename}`
                payload.photo = linkImage
            }

            const movies = await movieRepository.create(payload)
            return movies

        } catch (error) {
            console.log(error, '<<<')
        }
    }

    static update = async (pathParams, fileImage, params) => {
        try {
            const {id} = pathParams

            const {title, genres, year, photo} = params

            let payload = {
                id,
                title,
                genres,
                year,
                photo
            }

            if(fileImage){
                let linkImage = `http://localhost:3000/upload/${fileImage.filename}`
                payload.photo = linkImage
            }

            const movies = await movieRepository.update(id, payload)
            return movies

        } catch (error) {
            console.log(error, '<<<')
        }
    }

    static destroy = async(params) => {
        try {
            const {id} = params
            const movies = await movieRepository.destroy(id)
            return movies
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = movieService