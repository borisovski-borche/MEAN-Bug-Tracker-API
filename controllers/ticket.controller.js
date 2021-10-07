const TicketService = require("../services/ticket.service");

module.exports = class TicketController {
  static async getAllTickets(req, res, next) {
    try {
      const tickets = await TicketService.getAllTickets();
      res.status(200).send(tickets);
    } catch (error) {
      next(error);
    }
  }
  static async getTicketById(req, res, next) {
    try {
      const ticket = await TicketService.getTicketById(req.params.id);
      res.status(200).send(ticket);
    } catch (error) {
      next(error);
    }
  }
  static async createTicket(req, res, next) {
    try {
      const createdTicket = await TicketService.createTicket(req.body);
      res.status(201).send(createdTicket);
    } catch (error) {
      throw new Error(`Something Went Wrong ${error}`);
    }
  }
};
