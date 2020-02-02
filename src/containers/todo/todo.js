import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../actions/actionCreator';

import ToDoInput from '../../components/todo-input/Todo-input';
import ToDoList from '../../components/todo-list/Todo-list';
import Footer from '../../components/footer/Footer';

import './todo.scss';

class ToDo extends React.Component {
  state = {
    filter: 'all',
    textTask: '',
  }

  inputRef = React.createRef();

  handleInput = () => {
    this.setState({
      textTask: this.inputRef.current.value,
    });
  }

  render() {
    const {filter, textTask} = this.state;
    const { tasks } = this.props;    
    const tasksExist = tasks && tasks.length > 0;

    return (
      <div className="wrapper">
        <ToDoInput ref={this.inputRef} onChange={this.handleInput} value={textTask}/>
        {tasksExist && <ToDoList tasksList={tasks} />}
        {tasksExist && <Footer amount={tasks.length} filter={filter} />}
      </div>
    );
  }  
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapActionCreator = () => ({
  ...addTask,
})

export default connect(mapStateToProps, mapActionCreator)(ToDo);