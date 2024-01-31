
const router = require('express').Router();
const {getAllProducts,createProduct,updateProduct,deleteProduct} = require('../controllers/product.controller');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true})); 
router.use(bodyParser.json());


router.get('/getall', getAllProducts);
router.post('/create', createProduct); 
router.put('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);


module.exports = router;