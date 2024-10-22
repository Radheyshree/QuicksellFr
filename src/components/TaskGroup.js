import React from "react";
import TaskCard from "./TaskCard";

function TaskGroup({ groupKey, tasks }) {
  return (
    <div className="task-group">
      <h3>{groupKey}</h3>
      <div className="task-list">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskGroup;
