import express from 'express'

import usersController from '../controllers/user/user'

const router = express.Router()

//users landing page
router.get('/users', usersController.getUsers)

module.exports = router
