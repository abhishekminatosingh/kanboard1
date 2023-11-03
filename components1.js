import React from "react";

const KanbanBoardContext = React.createContext({
  groupingOption: "status",
  sortingOption: "priority",
});

export const KanbanBoardProvider = KanbanBoardContext.Provider;
export const useKanbanBoardContext = () => React.useContext(KanbanBoardContext);
