const Ticket = require("../models/ticket.model");

module.exports = class TicketService {
  //get all tickets ( only admin )
  static async getAllTickets() {
    try {
      const tickets = Ticket.find()
        .populate("creator")
        .populate("asignee")
        .populate("project");

      return tickets;
    } catch (error) {
      throw new Error(`Something Went Wrong ${error}`);
    }
  }
  //get ticket by id (for detailed ticked display)
  static async getTicketById(id) {
    try {
      const ticket = await Ticket.findById({ _id: id })
        .populate("creator")
        .populate("asignee")
        .populate("project");

      return ticket;
    } catch (error) {
      throw new Error(`Something Went Wrong ${error}`);
    }
  }

  //create ticket
  static async createTicket(ticketData) {
    try {
      const createdTicket = await new Ticket(ticketData).save();
      return createdTicket;
    } catch (error) {
      throw new Error(`Something Went Wrong ${error}`);
    }
  }
  //update ticket
  //delete ticket
};
