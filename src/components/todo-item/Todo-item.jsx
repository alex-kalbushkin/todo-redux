import React from 'react';
import PropTypes from 'prop-types';

import {Circle, CheckCircle, XCircle} from 'react-feather';

import './todo-item.scss';

const ToDoItem = ({text, isCompleted, id, removeTask, completedTask}) => (
  <div className='item-wrapper'>
    <li className='todo-item'>
      <span className='icon-wrapper' onClick={() => completedTask(id)}>
        {isCompleted ? <CheckCircle className='check-circle'/> : <Circle className='circle'/>}
      </span>
      <span className={isCompleted ? 'completed' : 'not-completed'}>{text}</span>
      <XCircle className='x-circle' onClick={() => removeTask(id)} />
    </li>
    <hr/>
  </div>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  id: PropTypes.number,
  completedTask: PropTypes.func,
}

ToDoItem.defaultProps = {
  text: '',
  isCompleted: false,
  id: 0,
  removeTask: () => {},
  completedTask: () => {},
}

export default ToDoItem;