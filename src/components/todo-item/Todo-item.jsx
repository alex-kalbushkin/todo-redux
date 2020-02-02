import React from 'react';
import PropTypes from 'prop-types';

import {Circle, CheckCircle, XCircle} from 'react-feather';

import './todo-item.scss';

const ToDoItem = ({text, isCompleted}) => (
  <div className='item-wrapper'>
    <li className='todo-item'>
      <span className='icon-wrapper'>
        {isCompleted ? <CheckCircle className='check-circle'/> : <Circle className='circle'/>}
      </span>
      <span className={isCompleted ? 'completed' : 'not-completed'}>{text}</span>
      <XCircle className='x-circle'/>
    </li>
    <hr/>
  </div>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
}

ToDoItem.defaultProps = {
  text: '',
  isCompleted: false,
}

export default ToDoItem;