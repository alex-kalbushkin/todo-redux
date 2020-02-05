import React from 'react';
import { connect } from 'react-redux';
import { addTask, removeTask, completedTask, changeFilter } from '../../actions/actionCreator';

import ToDoInput from '../../components/todo-input/Todo-input';
import ToDoList from '../../components/todo-list/Todo-list';
import Footer from '../../components/footer/Footer';

import './todo.scss';

class ToDo extends React.Component {
  state = {    
    textTask: '',
  }

  handleInput = ( {target: {value} }) => {
    this.setState({
      textTask: value,
    });
  }

  addNewTask = ( {key} ) => {
    const {textTask} = this.state;

    if (textTask.length > 2 && key === 'Enter') {
      const {addTask} = this.props;
      addTask((new Date()).getTime(), textTask, false);

      this.setState({
        textTask: '',
      });
    }    
  }

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'active':
        return tasks.filter(item => !item.isCompleted);      
      case 'completed':
        return tasks.filter(item => item.isCompleted);      
      default:
        return tasks;
    }
  }

  activeTasks = tasks => tasks.filter(item => !item.isCompleted).length;

  render() {
    const {textTask} = this.state;
    const { tasks, removeTask, completedTask, changeFilter, filter } = this.props;    
    const tasksExist = tasks && tasks.length > 0;
    const filtered = this.filterTasks(tasks, filter);
    const activeCount = this.activeTasks(tasks);

    return (
      <div className="wrapper">
        <ToDoInput 
          onChange={this.handleInput} 
          onKeyPress={this.addNewTask} 
          value={textTask} 
        />
        {tasksExist && <ToDoList tasksList={filtered} removeTask={removeTask} completedTask={completedTask}/>}
        {tasksExist && 
        <Footer amount={activeCount} filter={filter} changeFilter={changeFilter}/>}
      </div>
    );
  }  
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  filter: state.filter,
});

const mapActionCreators = {
  addTask,
  removeTask,
  completedTask,
  changeFilter,
}

export default connect(mapStateToProps, mapActionCreators)(ToDo);