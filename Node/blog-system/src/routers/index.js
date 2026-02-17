const express = require("express");

const router = express.Router();

const authRouter = require("./auth.router");

const blogRouter = require("./blog.router");

const commentsRouter = require("./commentsRouter");

const userRouter = require("./users.router");

router.use("/auth", authRouter);
router.use("/blogs", blogRouter);
router.use("/comments", commentsRouter);
router.use("/users", userRouter);

module.exports = router;
