require("dotenv").config();
console.clear();

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const http = require("http");

const { join } = require("path");
const { readdirSync } = require("fs");

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.json());
app.use(require("cors")());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

console.log("Routes");
readdirSync("src/routes").forEach((file) => {
  const { path, router } = require(join(__dirname, `routes/${file}`));
  console.log(`  - ${file.split(".")[0]} (${path})`);
  app.use(path, router);
});

server.listen(port);
server.on("listening", () => console.log(`\nListening on port ${port}\n`));
server.on("error", (err) => console.log(err));
