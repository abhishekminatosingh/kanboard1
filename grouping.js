import React, { useContext } from "react";
import { KanbanBoardContext } from "./KanbanBoardContext";

const GroupingOptions = () => {
  const { groupingOption, setGroupingOption } = useContext(KanbanBoardContext);

  const handleChange = (e) => {
    setGroupingOption(e.target.value);
  };

  return (
    <div className="grouping-options">
      <label>
        <input
          type="radio"
          name="grouping-option"
          value="status"
          checked={groupingOption === "status"}
          onChange={handleChange}
        />
        Status
      </label>
      <label>
        <input
          type="radio"
          name="grouping-option"
          value="user"
          checked={groupingOption === "user"}
          onChange={handleChange}
        />
        User
      </label>
      <label>
        <input
          type="radio"
          name="grouping-option"
          value="priority"
          checked={groupingOption === "priority"}
          onChange={handleChange}
        />
        Priority
      </label>
    </div>
  );
};

export default GroupingOptions;
