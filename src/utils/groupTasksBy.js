const groupTasksBy = (tasks, key) => {
    if (!tasks || tasks.length === 0) return {}; // Safeguard for undefined or empty tasks
    return tasks.reduce((grouped, task) => {
      const keyValue = task[key];
      if (!grouped[keyValue]) grouped[keyValue] = [];
      grouped[keyValue].push(task);
      return grouped;
    }, {});
  };
  
  export default groupTasksBy;
  