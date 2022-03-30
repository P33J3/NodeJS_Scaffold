import express from 'express'

const app = express()

// Middlewares
// Bodyparser
// CORS
// Error Middleware

// Routes go here

app.get('/', (req, res) => {
    res.send('<h1>Server is running!</h1>')
})

export default app
