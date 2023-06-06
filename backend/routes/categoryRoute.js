const express = require('express');
const{addCategory} = require('../controllers/categoryController');
const router =  express.Router();

router.route('categories').post(addCategory);

module.exports = router;