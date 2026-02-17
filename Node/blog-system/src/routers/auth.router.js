const {
  login,
  register,
  logout,
  currentUser,
  forgotPassword,
  resetPassword,
  verifyUser,
} = require("../controllers/auth.controller");

const express = require("express");

const authRouter = express.Router();

authRouter.post("/login", login);

authRouter.post("/register", register);

authRouter.post("/logout", logout);

authRouter.get("/current", currentUser);

authRouter.post("/forgot-pass", forgotPassword);

authRouter.post("/reset-pass", resetPassword);

authRouter.post("/verify", verifyUser);

module.exports = authRouter;
