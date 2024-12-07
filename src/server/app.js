const express = require("express");
const cors = require("cors");
const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("CORS, JSON, and URL-encoded middleware set up complete.");

console.log("Loading user router...");
try {
  const userRouter = require("./routes/user");
  app.use("/api/user", userRouter);
  console.log("User router loaded successfully.");
} catch (error) {
  console.error("Failed to load user router:", error);
}

console.log("Loading pizza router...");
try {
  const pizzaRouter = require("./routes/pizza");
  app.use("/api/pizza", pizzaRouter);
  console.log("Pizza router loaded successfully.");
} catch (error) {
  console.error("Failed to load pizza router:", error);
}

console.log("Starting server...");

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.post("/api/user/login", (req, res) => {
  const { id, pw } = req.body;
  const user = users.find((u) => u.id === id && u.pw === pw);
  if (user) {
    res.json({ ok: true, user: { id: user.id, nick: user.nick } });
  } else {
    res.json({ ok: false, msg: "Invalid username or password" });
  }
});
