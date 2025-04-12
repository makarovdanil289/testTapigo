import React from 'react';

const TodoItem = ({ task, onToggle }) => {
  const handleChange = () => {
    onToggle(task.id);
  };

  return (
    <li style={{ marginBottom: '10px' }}>
      <input
        type="checkbox"
        checked={task.done || false}
        onChange={handleChange}
      />
      <span style={{ marginLeft: '8px', textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
    </li>
  );
};

export default TodoItem;
