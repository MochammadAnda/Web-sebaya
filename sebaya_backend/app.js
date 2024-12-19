require("dotenv").config();

const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const route = require("./src/routes"); // Route utama

app.use(cors());
app.use(morgan("dev"));

function rawBodySaver(req, res, buf, encoding) {
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || "utf8");
  }
}

// Parsing JSON dan URL-encoded
app.use(express.urlencoded({ extended: false, limit: "50mb", verify: rawBodySaver }));
app.use(express.json({ limit: "50mb" }));
app.use(express.static("./asset/"));

// Route utama untuk API
app.use("/api", route);

// Menangani route yang tidak ditemukan
app.use((req, res, next) => {
  res.status(404).json({ status: "404", message: "URL not found" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API Running on PORT : ${port}`);
});

module.exports = app;
