
const PRODUCTS_MOCK = require('../productData')
const getAllProducts = (req, res) => {
    res.json({ data: PRODUCTS_MOCK })

}
module.exports = { getAllProducts }