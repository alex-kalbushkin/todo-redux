import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../todo-item/Todo-item';
import './todo-list.scss';

const ToDoList = ({tasksList, removeTask, completedTask}) => (
  <ul className='todo-list'>
    {tasksList.map(({id, text, isCompleted}) => (
      <ToDoItem 
        key={id} 
        removeTask={removeTask} 
        id={id} 
        text={text} 
        isCompleted={isCompleted} 
        completedTask={completedTask}
      />     
    ))}
    
  </ul>
);

ToDoList.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
  completedTask: PropTypes.func,
}

ToDoList.defaultProps = {
  tasksList: [],
  removeTask: () => {},
  completedTask: () => {},
}

export default ToDoList;