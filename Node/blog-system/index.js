require("dotenv").config();
const express = require("express");
const router = require("./src/routers");

const app = express();

app.use(express.json());

app.use("/api/v1", router);

/* 
http://loaclhost:3000/api/v1/auth/login
http://loaclhost:3000/api/v1/auth/blogs
*/

app.listen(process.env.PORT, () => {
  console.log();
});






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
