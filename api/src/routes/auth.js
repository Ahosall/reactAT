const router = require("express").Router();
const v4 = require("uuidv4");

let tokens = [{ id: 1, token: "AKSJbhdkajnskljhndasd.akskdoncc54653" }];

let users = [
  {
    id: 1,
    name: "Felipe T. R.",
    login: "Ahos.All",
    email: "ahosall@email.com",
    password: "123456",
  },
];

router.post("/login", (req, res, next) => {
  const { login, password } = req.body;

  let user = users.find(
    (usr) => usr.login == login && usr.password == password
  );

  if (user == undefined)
    return res.send({ status: 403, message: "User or password incorrect!" });

  let token = tokens.find((obj) => obj.id == user.id).token;
  res.send({
    status: 200,
    token,
    user,
  });
});

router.get("/", (req, res, next) => {
  const { user, auth } = req.query;
  const token = tokens.find((obj) => obj.id == user).token;

  if (token !== auth)
    return res.send({ status: 403, message: "Unrecognized token" });

  res.send({
    status: 200,
    token,
  });
});

router.post("/logout", (req, res, next) => {
  const { id } = req.body;

  tokens.map((obj, i) => (obj.id == id ? (tokens[i].token = v4.uuid()) : pass));

  res.send({
    status: 200,
  });
});

module.exports = {
  path: "/auth",
  router,
};
