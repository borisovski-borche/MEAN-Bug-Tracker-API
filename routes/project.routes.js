const router = require("express").Router();
const ProjectController = require("../controllers/project.controller");

router.get("/", ProjectController.fetchProjects);
router.get("/:id", ProjectController.fetchProjectById);
router.post("/", ProjectController.createProject);

module.exports = router;
