const express = require("express");
const { v4: uidv4 } = require("uuid");
const app = express();
app.use(express.json());

let blogs = [
  {
    id: "1",
    title: "JavaScript-ə Giriş",
    desc: "JavaScript-in əsas anlayışları və frontend dünyasında rolu haqqında ümumi baxış.",
    img: "https://picsum.photos/id/1011/600/400",
  },
  {
    id: "2",
    title: "React nədir və niyə istifadə olunur?",
    desc: "React kitabxanasının üstünlükləri, komponent anlayışı və real layihələrdə istifadəsi.",
    img: "https://picsum.photos/id/1025/600/400",
  },
  {
    id: "3",
    title: "Node.js ilə Backend Development",
    desc: "Node.js-in backend tərəfdə necə işlədiyi və REST API yaratma prosesi.",
    img: "https://picsum.photos/id/1040/600/400",
  },
  {
    id: "4",
    title: "TypeScript JavaScript-dən nə ilə fərqlənir?",
    desc: "Type safety, interface və enum anlayışları ilə TypeScript-in verdiyi üstünlüklər.",
    img: "https://picsum.photos/id/1060/600/400",
  },
  {
    id: "5",
    title: "Frontend vs Backend",
    desc: "Frontend və backend anlayışlarının fərqləri və hər ikisinin layihədə rolu.",
    img: "https://picsum.photos/id/1074/600/400",
  },
  {
    id: "6",
    title: "REST API nədir?",
    desc: "REST prinsipləri, HTTP metodları və real API nümunələri ilə izah.",
    img: "https://picsum.photos/id/1084/600/400",
  },
  {
    id: "7",
    title: "Authentication və Authorization",
    desc: "JWT, session və token əsaslı təhlükəsizlik mexanizmlərinin müqayisəsi.",
    img: "https://picsum.photos/id/1080/600/400",
  },
  {
    id: "8",
    title: "CSS Flexbox və Grid",
    desc: "Responsive dizayn üçün Flexbox və Grid sistemlərinin praktik istifadəsi.",
    img: "https://picsum.photos/id/1039/600/400",
  },
  {
    id: "9",
    title: "Clean Code yazmaq niyə vacibdir?",
    desc: "Oxunaqlı və maintainable kod yazmaq üçün əsas prinsiplər.",
    img: "https://picsum.photos/id/1050/600/400",
  },
  {
    id: "10",
    title: "Deploy prosesi necə olur?",
    desc: "Frontend və backend layihələrinin production-a çıxarılma mərhələləri.",
    img: "https://picsum.photos/id/1015/600/400",
  },
];

app.get("/blogs", (request, response) => {
  response.json(blogs);
});

app.get("/blogs/:id", (request, response) => {
  const { id } = request.params;
  const foundBlog = blogs.find((blog) => blog.id === id);
  if (!foundBlog) {
    return response.status(404).json({
      message: "Blog not found",
    });
  }
  response.json(foundBlog);
});

app.post("/blogs", (request, response) => {
  const { title, img, desc } = request.body;

  blogs.push({
    id: uidv4(),
    title,
    desc,
    img,
  });

  response.status(201).json({
    message: "New blog created",
  });
});

app.put("/blogs/:id", (request, response) => {
  const { id } = request.params;
  const { title, desc, img } = request.body;
  const foundBlog = blogs.find((blog) => blog.id === id);
  if (!foundBlog) {
    return response.status(404).json({
      message: "Blog not found",
    });
  }

  foundBlog.title = title || foundBlog.title;
  foundBlog.desc = desc || foundBlog.desc;
  foundBlog.img = img || foundBlog.img;

  response.json({
    message: "Blog edit successfully",
  });
});

app.delete("/blogs/:id", (request, response) => {
  const { id } = request.params;
  const foundBlog = blogs.find((blog) => blog.id === id);
  if (!foundBlog) {
    return response.status(404).json({
      message: "Blog not found",
    });
  }

  blogs = blogs.filter((blog) => blog.id !== id);

  response.json({
    message: "Blog delete successfully",
  });
});

app.listen(3300, () => {
  console.log("Server is run...");
});

// http:localhost:3300/blogs GET=> all blog
// http:localhost:3300/blogs POST => create blog
// http:localhost:3300/blogs/:id GET => single blog
// http:localhost:3300/blogs/:id PUT => edit blog
// http:localhost:3300/blogs/:id DELETE => delete blog
