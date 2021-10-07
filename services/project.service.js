const Project = require("../models/project.model");

module.exports = class ProjectService {
  //Fetch all projects (only admin)
  static async fetchProjects() {
    try {
      const projects = await Project.find()
        .populate("projectLead")
        .populate("developers")
        .populate("tickets");

      return projects;
    } catch (error) {
      throw new Error(`Something Went Wrong ${error}`);
    }
  }
  //Fetch project by id (this gets the project data, the tickets for the project and the developers)
  static async fetchProjectById(id) {
    try {
      const project = await Project.findById(id)
        .populate("projectLead")
        .populate("developers")
        .populate("tickets");

      return project;
    } catch (error) {
      throw new Error(`Something Went Wrong ${error}`);
    }
  }
  //Create a new project (only admin)
  static async createProject(projectData) {
    try {
      const project = await new Project(projectData).save();
      return project;
    } catch (error) {
      throw new Error(`Something Went Wrong ${error}`);
    }
  }
  //Update a project (Project Lead or Admin( this is where assigning the project lead or developers is done )
  //Assign Project Lead (Admin )
  //Assign Developers (Lead or Admin)
  //Delete a project
};
