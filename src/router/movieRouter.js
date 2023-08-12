const express = require('express')
const router = express.Router()

const movieController = require('../controller/movieController')

const upload = require('../middleware/multer')


router.get('/', movieController.findAll)
router.get('/:id', movieController.findOne)
router.post('/', upload.single('photo'), movieController.create)
router.put('/:id', upload.single('photo'), movieController.update)
router.delete('/:id', movieController.destroy)



module.exports = router