import React from "react";

function TaskCard({ task }) {
  return (
    <div className="task-card">
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
      <p><strong>User:</strong> {task.user}</p>
    </div>
  );
}

export default TaskCard;
