import React from 'react';
import PropTypes from 'prop-types';
import {FolderPlus} from 'react-feather';

import './todo-input.scss';

const ToDoInput = ({onChange, value}) => (
  <div className='todo-input-wrapper'>
    <FolderPlus class='icon-folder'/>
    <input 
      className='todo-input'
      placeholder='Click to add a task'
      onChange={onChange}
      value={value}
    />
    
  </div>
);

ToDoInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}

ToDoInput.defaultProps = {
  onChange: () => {},
  value: '',
}

export default ToDoInput;
