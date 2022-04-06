import express from "express";
import createError from "http-errors";
import route from "./routes";
import errorHandler from "./middlewares/errorHandler";

const app = express();

// Middlewares

// Bodyparser
app.use(express.json());

// CORS
// Error Middleware

// Routes go here

app.get("/", (req, res, next) => {
  //const error = new Error("Testing Error Middleware");
  res.send("<h1>Server is running!</h1>");

  // next(error);
});

app.use(route);

app.use((req, res, next) => {
  next(createError(404));
});

app.use(errorHandler);
export default app;
