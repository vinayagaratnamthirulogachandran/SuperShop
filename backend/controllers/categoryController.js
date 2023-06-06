const Category = require('../models/categoryModel');
const ErrorHandler = require('../utils/errorHandler');
const asyncHandler = require('express-async-handler');

exports.addCategory = asyncHandler(async(req, res, next) =>{
    const category = await Category.create(req.body);
    res.status(201).json(success, category);
})