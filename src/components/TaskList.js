import React from 'react';
import TaskItem from './TaskItem';

// My current method to put the Tasks collected from 'items' into a list using the map function:
// Attempting to pass the list of Tasks down to give each Task a unique key: no good
// Testing the on-click: no good
// Attempting to give each item a type of 'key' or 'id': no good
const TaskList = ({items, onItemClick}) => {
  const producedList = items.map((item) => {
    return (
      <TaskItem 
        oneItem={item}
        onItemClick={onItemClick}
        />
    );
  });
  return <div class="ui relaxed divided list">{producedList}</div>
}
export default TaskList;