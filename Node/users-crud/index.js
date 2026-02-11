const express = require("express");

const { v4: uidv4 } = require("uuid");

const app = express();

app.use(express.json());

let users = [
  {
    id: "u1a9f3",
    name: "Zaur",
    surname: "Babayev",
    username: "zaur_b",
    age: 25,
    email: "zaur.babayev@mail.com",
  },
  {
    id: "u2k8d4",
    name: "Elvin",
    surname: "Quliyev",
    username: "elvinq",
    age: 28,
    email: "elvin.quliyev@mail.com",
  },
  {
    id: "u3m7p2",
    name: "Aysel",
    surname: "Məmmədova",
    username: "aysel_m",
    age: 23,
    email: "aysel.mammadova@mail.com",
  },
  {
    id: "u4r9t1",
    name: "Nihad",
    surname: "Hüseynov",
    username: "nihad_h",
    age: 30,
    email: "nihad.huseynov@mail.com",
  },
  {
    id: "u5x2c8",
    name: "Leyla",
    surname: "Əliyeva",
    username: "leyla_a",
    age: 26,
    email: "leyla.aliyeva@mail.com",
  },
  {
    id: "u6b4n9",
    name: "Kamran",
    surname: "İsmayılov",
    username: "kamran_i",
    age: 32,
    email: "kamran.ismayilov@mail.com",
  },
  {
    id: "u7q6e5",
    name: "Nərgiz",
    surname: "Rzayeva",
    username: "nargiz_r",
    age: 24,
    email: "nargiz.rzayeva@mail.com",
  },
  {
    id: "u8z1w7",
    name: "Orxan",
    surname: "Mustafayev",
    username: "orxan_m",
    age: 29,
    email: "orxan.mustafayev@mail.com",
  },
  {
    id: "u9l3s0",
    name: "Günel",
    surname: "Tağıyeva",
    username: "gunel_t",
    age: 22,
    email: "gunel.tagiyeva@mail.com",
  },
  {
    id: "u10h5v2",
    name: "Rauf",
    surname: "Abbasov",
    username: "rauf_a",
    age: 35,
    email: "rauf.abbasov@mail.com",
  },
];

app.get("/users", (_, response) => {
  response.json(users);
});

app.post("/users", (request, response) => {
  const { name, surname, username, age, email } = request.body;
  users.push({
    id: uidv4(),
    name,
    surname,
    username,
    age,
    email,
  });
  response.status(201).json({
    message: "User created",
  });
});

app.get("/users/:id", (request, response) => {
  const { id } = request.params;
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    return response.status(404).json({
      message: "User not found",
    });
  }
  response.json(foundUser);
});

app.put("/users/:id", (request, response) => {
  const { id } = request.params;
  const { name, surname, username, age, email } = request.body;

  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    return response.status(404).json({
      message: "User not found",
    });
  }

  if (name !== undefined) foundUser.name = name;
  if (surname !== undefined) foundUser.surname = surname;
  if (username !== undefined) foundUser.username = username;
  if (age !== undefined) foundUser.age = age;
  if (email !== undefined) foundUser.email = email;

  response.json({
    message: "User edit successfully",
  });
});

app.delete("/users/:id", (request, response) => {
  const { id } = request.params;
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    return response.status(404).json({
      message: "User not found",
    });
  }

  users = users.filter((user) => user.id !== id);

  response.json({
    message: "User delete successfully",
  });
});

app.listen(6060, () => {
  console.log("Server is run...");
});
