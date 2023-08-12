const movieService = require('../services/movieServices')

class movieController {

  static findAll = async (req, res, next) => {
    try {
      const movies = await movieService.findAll(req.query)
      
      res.status(200).json({
        message: 'Get All Movies Success',
        data: movies
      })
    } catch (error) {
      next(err)
    }
  }

  static findOne = async (req, res, next) => {
    try {
      const movies = await movieService.findOne(req.params)

      if(!movies){
        throw {name: 'ErrorNotFound'}
      }

      return res.status(200).json({
        message: 'Get Movie Success',
        data: movies
      })
    } catch (error) {
      next(error)
    }
  }

  static create = async (req, res, next) => {
    try {
      const movies = await movieService.create(req.file, req.body)

      res.status(201).json({
        message: 'Create New Movie Success',
        data:movies
      })
    } catch (error) {
      next(error) 
    }
  }

  static update = async (req, res, next) => {
    try {
      const movies = await movieService.update(req.params, req.file, req.body)
      res.status(200).json({
        message: 'Movie Updated Successfully',
        data: movies
      })
    } catch (error) {
       next(error)
    }
  }

  static destroy = async (req, res, next) => {
    try {
      const movies = await movieService.destroy(req.params)
      if(!movies){
        throw {name: 'ErrorNotFound'}
      }
      
      res.status(200).json({
        message: 'Movie Deleted Successfully'
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = movieController