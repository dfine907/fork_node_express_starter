const { Router } = require('express');
const { terrain } = require('../controllers/testController')

const router = Router();



// listen for incoming requests on these routes
// for example 'user/add' will send requests to our `createUser` function

router.route('/').get(terrain);


module.exports = router;
