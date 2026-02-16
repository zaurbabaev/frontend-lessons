require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log();
});

// auth
app.post("/auth/login", () => {});

app.post("/auth/register", () => {});

app.post("/auth/logout", () => {});

app.get("/auth/current", () => {});

app.post("/auth/forgot-pass", () => {});

app.post("/auth/reset-pass", () => {});

app.post("/auth/verify", () => {});

app.get("/blogs", () => {}); // active blogs
app.post("/blogs", () => {});
app.get("/blogs/:id", () => {});
app.put("/blogs/:id", () => {});
app.patch("/blogs/:id", () => {});
app.delete("/blogs/:id", () => {});
app.get("blogs/for-admin", () => {}); //all blogs
app.put("/blogs/:id/for-admin", () => {});
app.get("/blogs/:id/for-admin", () => {});

app.post("/blogs/:id/comment", () => {});
app.get("/blogs/:id/comment", () => {});

app.get("/comments", () => {});
app.put("/comments/:id", () => {});
app.get("/commnets/:id", () => {});
app.delete("/commnets/:id", () => {});
app.patch("/")

/* blogs=> get All blog
blogs=> create
blogs/:id=>single
blogs/:id put
blogs/:id delete */

/* auth/register =>user create
auth/login =>user login
auth/current=> auth me */

/* admin => all permission
user=> register, login, create blog, single blog, edit blog, deactive, comment */
