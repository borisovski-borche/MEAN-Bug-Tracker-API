const router = require("express").Router();
const TicketController = require("../controllers/ticket.controller");

router.get("/", TicketController.getAllTickets);

router.get("/:id", TicketController.getTicketById);

router.post("/", TicketController.createTicket);

module.exports = router;
