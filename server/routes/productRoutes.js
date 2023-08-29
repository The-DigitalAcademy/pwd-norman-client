const  express = require('express')
const router = express.Router() 
const {getAllProducts} = require('../controller/productCtrl')

router.get('/', getAllProducts)

module.exports = router