const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// cho phép dùng lệnh tĩnh như là (CSS, JS, hình ảnh)
app.use(express.static(path.join(__dirname, "public")));

// Cấu hình view engine là Pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.get("/", (req, res) => {
  res.render("index", {
    title: "hello,xin chào các bạn",
    message: "Xin Chào, quẹo cơm tu gà không biết code ",
  });
});

// Định nghĩa route với trang login
app.get("/login", (req, res) => {
  res.render("login", {
    loginTitle: "ĐĂNG NHẬP DÔ ĐI THẰNG NGU ",
    loginMessage: "Đăng nhập vào hộ bố mày cái",
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
