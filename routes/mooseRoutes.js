const { Router } = require('express');
const { moose } = require('../controllers/mooseController')

const router = Router();



// listen for incoming requests on these routes
// for example 'user/add' will send requests to our `createUser` function

router.route('/').get(moose);


module.exports = router;