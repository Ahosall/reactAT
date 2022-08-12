const router = require("express").Router();

router.post("/", (req, res, next) => {
  let tokens = [{ id: 1, token: "AKSJbhdkajnskljhndasd.akskdoncc54654" }];

  let users = [
    {
      id: 1,
      name: "Ahosall",
      email: "ahosall@email.com",
      password: 123456,
    },
  ];

  let user = users.find(
    (usr) => usr.email == req.body.email && usr.password == req.body.password
  )[0];
  console.log(user);
  if (user == undefined)
    return res.send({ status: 403, message: "User/Passord incorrect!" });
  let token = tokens.find((obj) => obj.id == user.id)[0];
  res.send({
    status: 200,
    token,
    user,
  });
});

module.exports = {
  path: "/login",
  router,
};
