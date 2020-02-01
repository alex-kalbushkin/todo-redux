import React from 'react';

import ToDoInput from '../../components/todo-input/Todo-input';
import ToDoList from '../../components/todo-list/Todo-list';
import Footer from '../../components/footer/Footer';

import './todo.scss';

const TASKS = [
  {
    id: 1,
    text: 'Learn JS',
    isCompleted: false,
  }, 
  {
    id: 2,
    text: 'Learn React',
    isCompleted: true,
  }, 
  {
    id: 3,
    text: 'Learn Redux',
    isCompleted: false,
  }
];

export default class ToDo extends React.Component {
  state = {
    filter: 'all',
  }

  render() {
    const {filter} = this.state;
    const tasksList = TASKS;
    const tasksExist = tasksList && tasksList.length > 0;

    return (
      <div className="wrapper">
        <ToDoInput />
        {tasksExist && <ToDoList tasksList={tasksList} />}
        {tasksExist && <Footer amount={tasksList.length} filter={filter} />}
      </div>
    );
  }  
}