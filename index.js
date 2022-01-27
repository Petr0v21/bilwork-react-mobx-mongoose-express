const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("./models/User");
const Post = require("./models/Post");

const app = express();
const PORT = 5000;

app.use(express.json({ extendend: true }));
app.use(cors());

app.post("/database/posts/comments", async (req, res) => {
  try {
    const { comment } = req.body;
    const id = comment.id;
    console.log(id);
    const candidates = await Post.find({ id });
    console.log(candidate);
  } catch (e) {
    res.status(500).json({ message: "что-то пошло не так" });
  }
});

app.post("/database/user", async (req, res) => {
  try {
    const { userInfo } = req.body;
    const id = userInfo.userId;
    const user = await User.findOne({ _id: id });
    const email = user.email;
    const posts = await Post.find({ email: email });
    console.log(user);
    console.log(posts);
    res.json({ profil: user, userPosts: posts });
  } catch (e) {
    res.status(500).json({ message: "что-то пошло не так" });
  }
});

app.post("/database/viewposts", async (req, res) => {
  try {
    const { category } = req.body;
    const candidates = await Post.find({ category });
    // candidates.forEach(function (item, index, array) {
    //   console.log(item, index);
    // });
    res.send(candidates);
  } catch (e) {
    res.status(500).json({ message: "что-то пошло не так" });
  }
});

app.post("/database/posts", [], async (req, res) => {
  try {
    const {
      title,
      name,
      description,
      city,
      category,
      phone,
      email,
      socmedia,
      img,
    } = req.body;
    const post = new Post({
      title: title,
      name: name,
      description: description,
      city: city,
      category: category,
      phone: phone,
      email: email,
      socmedia: socmedia,
      img: img,
      comments: null,
    });
    await post.save();
    return res.status(201).json({ message: "поcт создан" });
  } catch (e) {
    res.status(500).json({ message: "что-то пошло не так" });
  }
});

app.post(
  "/auth/singup",
  [
    check("email", "Введите корректный email").normalizeEmail().isEmail(),
    check("password", "Введите пароль").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Некорректный данные при входе в систему",
      });
    }
    try {
      const { email, password, terms, politic, name } = req.body;
      const candidate = await User.findOne({ email });

      if (candidate) {
        return res
          .status(400)
          .json({ message: "Такой пользователь уже сущиствует" });
      }

      if (!politic && !terms) {
        return res
          .status(400)
          .json({ message: "Не подписано на соблюдение привил" });
      }

      const passwordHashed = await bcrypt.hash(password, 12);
      const user = new User({
        name,
        email,
        password: passwordHashed,
        politic,
        terms,
      });
      await user.save();

      return res.status(201).json({ message: "пользователь создан" });
    } catch (e) {
      res.status(500).json({ message: "что-то пошло не так" });
    }
  }
);

app.post(
  "/auth/login",
  [
    check("email", "Введите корректный email").normalizeEmail().isEmail(),
    check("password", "Введите пароль").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректный данные при входе в систему",
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "Пользователь не найден" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ message: "Неверный пароль, попробуйте снова" });
      }

      const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
        expiresIn: "1h",
      });

      res.json({ token, userId: user.id });
      console.log(user.id);
      console.log("Yes");
    } catch (e) {
      res
        .status(500)
        .json({ message: "Что-то пошло не так, попробуйте снова" });
    }
  }
);

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://user:010101@cluster0.zqljj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true
      }
    );
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
  } catch (e) {
    console.log("Server Error:", e.message);
    process.exit(1);
  }
}

start();
