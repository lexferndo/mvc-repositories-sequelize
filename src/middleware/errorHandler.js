const errorHandler = (err, req, res, next) => {
    console.log(err)

    if(err.name === 'ErrorNotFound'){
        return res.status(404).json({
            message: 'Error Not Found',
            serverMessage: err
        })
    }else{
        return res.status(500).json({
            message:'Internal Server Error',
            serverMessage: err
        })
    }
}

module.exports = errorHandler