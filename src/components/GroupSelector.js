import React from "react";

function GroupSelector({ setGroupBy }) {
  return (
    <div className="group-selector">
      <label htmlFor="grouping">Group by: </label>
      <select id="grouping" onChange={(e) => setGroupBy(e.target.value)}>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
}

export default GroupSelector;
