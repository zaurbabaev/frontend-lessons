const express = require("express");
const userRouter = express.Router();

userRouter.get("/", () => {});
userRouter.post("/", () => {});
userRouter.put("/:id", () => {});
userRouter.patch("/:id", () => {});
userRouter.delete("/:id", () => {});
userRouter.get("/:id", () => {});

module.exports = userRouter;
