const express = require("express");
const commentsRouter = express.Router();

commentsRouter.get("/comments", () => {});
commentsRouter.app.put("/comments/:id", () => {});
commentsRouter.get("/comments/:id", () => {});
commentsRouter.delete("/comments/:id", () => {});
commentsRouter.patch("/");

module.exports = commentsRouter;
