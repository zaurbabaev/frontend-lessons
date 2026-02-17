const express = require("express");
const blogRouter = express.Router();

blogRouter.get("/", () => {}); // active blogs
blogRouter.post("/", () => {});
blogRouter.get("/:id", () => {});
blogRouter.put("/:id", () => {});
blogRouter.patch("/:id", () => {});
blogRouter.delete("/:id", () => {});
blogRouter.get("/for-admin", () => {}); //all blogs
blogRouter.put("/:id/for-admin", () => {});
blogRouter.get("/:id/for-admin", () => {});

app.post("/:id/comment", () => {});
app.get("/:id/comment", () => {});

module.exports = blogRouter;
