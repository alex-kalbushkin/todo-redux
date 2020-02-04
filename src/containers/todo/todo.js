import React from 'react';
import { connect } from 'react-redux';
import { addTask, removeTask, completedTask } from '../../actions/actionCreator';

import ToDoInput from '../../components/todo-input/Todo-input';
import ToDoList from '../../components/todo-list/Todo-list';
import Footer from '../../components/footer/Footer';

import './todo.scss';

class ToDo extends React.Component {
  state = {
    filter: 'all',
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

  render() {
    const {filter, textTask} = this.state;
    const { tasks, removeTask, completedTask } = this.props;    
    const tasksExist = tasks && tasks.length > 0;

    return (
      <div className="wrapper">
        <ToDoInput 
          onChange={this.handleInput} 
          onKeyPress={this.addNewTask} 
          value={textTask} 
        />
        {tasksExist && <ToDoList tasksList={tasks} removeTask={removeTask} completedTask={completedTask}/>}
        {tasksExist && <Footer amount={tasks.length} filter={filter} />}
      </div>
    );
  }  
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapActionCreators = {
  addTask,
  removeTask,
  completedTask,
}

export default connect(mapStateToProps, mapActionCreators)(ToDo);