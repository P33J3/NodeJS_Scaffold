import express from "express";
import createError from "http-errors";
import route from "./routes";
import errorHandler from "./middlewares/errorHandler";
import bodyParser from "body-parser";

const app = express();

// Middlewares

// Bodyparser
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS
// Error Middleware

// Routes go here

app.get("/", (req, res) => {
  res.send("<h1>Server is running!</h1>");
});

app.use(route);

app.use((req, res, next) => {
  next(createError(404));
});

app.use(errorHandler);

export default app;
