import { Router } from "express";
import UserController from "../controllers/user";

const router = Router();
const userController = new UserController();

// router.get("/users", userController.getAllUsers);

router.get("/users", (req, res, next) => {
  res.send("<h1>Route Get Users!</h1>");
});

export default router;
