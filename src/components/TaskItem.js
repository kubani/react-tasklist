import React from 'react';

// Attempting to show each item in the 'items' array as individual cards that can be clicked
const TaskItem = ({ oneItem, onItemClick }) => {
  return (
    <div onClick={()=> onItemClick(oneItem)} className="ui cards">
      <div className="card">
        <div className="content">
          <div className="description">{oneItem}</div>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;