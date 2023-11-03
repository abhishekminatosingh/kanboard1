import React, { useEffect, useState } from "react";
import axios from "axios";
import { useKanbanBoardContext } from "./KanbanBoardContext";

const KanbanBoard = () => {
  const { groupingOption, sortingOption } = useKanbanBoardContext();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        setTickets(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const groupTickets = () => {
    switch (groupingOption) {
      case "status":
        return tickets.groupBy((ticket) => ticket.status);
      case "user":
        return tickets.groupBy((ticket) => ticket.assignedUser);
      case "priority":
        return tickets.groupBy((ticket) => PriorityLevels[ticket.priority]);
      default:
        return tickets;
    }
  };

  const sortTickets = (tickets) => {
    switch (sortingOption) {
      case "priority":
        return tickets.sort((ticketA, ticketB) => ticketB.priority - ticketA.priority);
      case "title":
        return tickets.sort((ticketA, ticketB) => ticketA.title.localeCompare(ticketB.title));
      default:
        return tickets;
    }
  };

  return (
    <div className="kanban-board">
      {groupTickets().map((group) => (
        <div className="kanban-column" key={group.key}>
          <h2>{group.key}</h2>
          <ul>
            {sortTickets(group.value).map((ticket) => (
              <li key={ticket.id}>{ticket.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
