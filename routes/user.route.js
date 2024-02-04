const router = require('express').Router();
const {getAllUser, addUser, getOne ,updateUser ,deleteUser} = require('../controllers/user.controller');

router.get('/getAll', getAllUser);

router.get('/getOne/:id', getOne);

router.post('/addUser', addUser);

router.post('/update/:id', updateUser);

router.post('/deleteUser/:id', deleteUser);



module.exports = router;