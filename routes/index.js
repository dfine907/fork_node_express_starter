const { Router } = require('express')
const userRoutes = require('./userRoutes')
const csvRoutes = require('./csvRoutes')
const testRoutes = require('./testRoutes')
const mooseRoutes = require('./mooseRoutes')
const router = Router()

// we inject all our user routes to listen for requests on '/user'
router.use('/user', userRoutes)
router.use('/test', testRoutes)
router.use('/files', csvRoutes)
router.use('/moose', mooseRoutes)

module.exports = router
