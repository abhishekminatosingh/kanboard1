import React, { useContext } from "react";
import { KanbanBoardContext } from "./KanbanBoardContext";

const SortingOptions = () => {
  const { sortingOption, setSortingOption } = useContext(KanbanBoardContext);

  const handleChange = (e) => {
    setSortingOption(e.target.value);
  };

  return (
    <div className="sorting-options">
      <label>
        <input
          type="radio"
          name="sorting-option"
          value="priority"
          checked={sortingOption === "priority"}
          onChange={handleChange}
        />
        Priority
      </label>
      <label>
        <input
          type="radio"
          name="sorting-option"
          value="title"
          checked={sortingOption === "title"}
          onChange={handleChange}
        />
        Title
      </label>
    </div>
  );
};

export default SortingOptions;
