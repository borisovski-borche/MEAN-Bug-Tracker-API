const router = require("express").Router();

router.get("/test", (req, res) => {
  res.json({ test: "api is online" });
});

module.exports = router;
