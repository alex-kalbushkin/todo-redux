import React from 'react';
import PropTypes from 'prop-types';
import {FolderPlus} from 'react-feather';

import './todo-input.scss';

const ToDoInput = ({onChange, value, onKeyPress}) => (
  <div className='todo-input-wrapper'>
    <FolderPlus className='icon-folder'/>
    <input 
      className='todo-input'
      placeholder='Click to add a task'
      onChange={onChange}
      value={value}
      onKeyPress={onKeyPress}
    />
    
  </div>
);

ToDoInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  onKeyPress: PropTypes.func,
}

ToDoInput.defaultProps = {
  onChange: () => {},
  value: '',
  onKeyPress: () => {},
}

export default ToDoInput;
