import React from 'react';
import PropTypes from 'prop-types';

import {Circle, CheckCircle, XCircle} from 'react-feather';

import './todo-item.scss';

const ToDoItem = ({text, isCompleted}) => (
  <li className='todo-item'>
    <div className='icon-wrapper'>
      {isCompleted ? <CheckCircle /> : <Circle />}
    </div>
    <span className={isCompleted ? 'completed' : 'not-complited'}>{text}</span>
    <XCircle />
  </li>
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