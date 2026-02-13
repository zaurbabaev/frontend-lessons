const express = require("express");

const { v4: uidv4 } = require("uuid");

const app = express();

app.use(express.json());

let users = [
  {
    id: uidv4(),
    name: "Zaur",
    surname: "Babayev",
    email: "zaur@mail.ru",
    username: "zaur-1",
    age: 38,
    password: "12345",
  },
];

app.post("/signup", (request, response) => {
  const { name, surname, email, username, age, password } = request.body;

  if (!email || !password || !username) {
    return response.status(400).json({
      message: "Email, password, username vacibdir",
    });
  }

  const exists = users.find((user) => user.email === email);
  if (exists) {
    return response.status(409).json({
      message: "Bu email artıq qeydiyyatdan keçib",
    });
  }

  const newUser = {
    id: uidv4(),
    name,
    surname,
    email,
    password,
    username,
    age,
  };

  users.push(newUser);

  response.status(201).json({
    message: "Signup successfully",
    userId: newUser.id,
  });
});

app.get("/users", (_, response) => {
  response.json(users);
});

app.post("/login", (request, response) => {
  const { email, password } = request.body;

  const foundUser = users.find(
    (user) => user.email === email && user.password === password,
  );

  if (!foundUser) {
    return response.status(401).json({
      message: "Email və ya password",
    });
  }

  response.json({
    message: "Login successfully",
    user: {
      id: foundUser.id,
      name: foundUser.name,
      surname: foundUser.surname,
      username: foundUser.username,
      email: foundUser.email,
      age: foundUser.age,
    },
  });
});
app.listen(3000, () => {
  console.log("Server is run...");
});
