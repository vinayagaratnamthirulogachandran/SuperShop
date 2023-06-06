const ErrorHandler = require('../utils/errorHandler');

module.exports = (err, req, res, next) =>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal server error';

    if(err.name === 'CastError'){
        const message = 'Resource not found.Invalid' +err.path;
        err = new ErrorHandler(message, 400);
    }

    if(err.code === 11000){
        const fieldName = err.message.split(".$")[1].split("_")[0];
        const message = `Duplicate value entered in ${fieldName}`
        err = new ErrorHandler(message, 400);
    }
    
}