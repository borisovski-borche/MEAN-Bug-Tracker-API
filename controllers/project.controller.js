const ProjectService = require("../services/project.service");

module.exports = class ProjectController {
  static async fetchProjects(req, res, next) {
    try {
      const projects = await ProjectService.fetchProjects();
      res.status(200).send(projects);
    } catch (error) {
      next(error);
    }
  }
  static async fetchProjectById(req, res, next) {
    try {
      const project = await ProjectService.fetchProjectById(req.params.id);
      res.status(200).send(project);
    } catch (error) {
      next(error);
    }
  }
  static async createProject(req, res, next) {
    console.log(req.body);
    console.log("In the request");

    try {
      const createdProject = await ProjectService.createProject(req.body);
      res.status(201).send(createdProject);
    } catch (error) {
      next(error);
    }
  }
};
