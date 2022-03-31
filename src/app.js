import express from 'express'

const app = express()

import userRoutes from './routes/user'
import errorController from './controllers/error'

// Middlewares

// Bodyparser
import bodyParser from 'body-parser'
app.use(bodyParser.urlencoded({ extended: false }))

// CORS

// Routes go here

app.use('/admin', userRoutes)

// Error Middleware
// function errorLogger(error, req, res, next) {
//     console.log(error)
//     res.status(500).send(error)
// }

app.use('/error', errorController.get404)

export default app
