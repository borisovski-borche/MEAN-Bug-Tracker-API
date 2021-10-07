const router = require("express").Router();

const ticketRouter = require("../routes/ticket.routes");
const userRouter = require("../routes/user.routes");
const projectRouter = require("../routes/project.routes");

router.use("/tickets", ticketRouter);
router.use("/users", userRouter);
router.use("/projects", projectRouter);

router.use("/test", (req, res, next) => {
  console.log(req.body);
  console.log("in the request");
  res.send(req.body);
});

module.exports = router;
