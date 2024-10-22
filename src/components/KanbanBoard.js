import React, { useState } from 'react';
import groupTasksBy from '../utils/groupTasksBy';
import './KanbanBoard.css';

const mockTasks = [
  { id: 1, title: 'Task 1', status: 'To Do', priority: 'High' },
  { id: 2, title: 'Task 2', status: 'In Progress', priority: 'Medium' },
  { id: 3, title: 'Task 3', status: 'Completed', priority: 'Low' }
];

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(mockTasks);
  const [groupedTasks, setGroupedTasks] = useState(groupTasksBy(tasks, 'status'));

  const handleGroupChange = (event) => {
    const groupBy = event.target.value;
    const grouped = groupTasksBy(tasks, groupBy);
    setGroupedTasks(grouped);
  };

  const handleSortChange = (event) => {
    const sortBy = event.target.value;
    const sortedTasks = [...tasks].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    setTasks(sortedTasks);
    setGroupedTasks(groupTasksBy(sortedTasks, 'status')); // Update the grouped tasks after sorting
  };

  return (
    <div className="kanban-container">
      <h1>Kanban Board</h1>
      <div className="controls">
        <label>
          Group By:
          <select onChange={handleGroupChange}>
            <option value="status">Status</option>
            <option value="priority">Priority</option>
          </select>
        </label>

        <label>
          Sort By:
          <select onChange={handleSortChange}>
            <option value="priority">Priority</option>
            <option value="status">Status</option>
          </select>
        </label>
      </div>

      <div className="kanban-board">
        {Object.keys(groupedTasks).map((status) => (
          <div key={status} className="kanban-column">
            <h2>{status}</h2>
            <ul>
              {groupedTasks[status].map((task) => (
                <li key={task.id}>{task.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
