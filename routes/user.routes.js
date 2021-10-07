const router = require("express").Router();
const UserController = require("../controllers/user.controller");

router.post("/", UserController.registerUser);

router.get("/:id", UserController.getUserById);

module.exports = router;
