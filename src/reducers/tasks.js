import { ADD_TASK, REMOVE_TASK, COMPLETED_TASK } from '../constants';
import { load } from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'To-Do' });

if (!TASKS || !TASKS.tasks ||!TASKS.tasks.length) {
  TASKS = {
    tasks: [],
  }
}

const tasks = (state = TASKS.tasks, {id, text, isCompleted, type}) => {
  switch (type) {
    case ADD_TASK :
      return [
        ...state,
        {
          id,
          text,
          isCompleted,
        }
      ]
    case REMOVE_TASK:
      return [...state].filter(item => item.id !== id);
    case COMPLETED_TASK:
      return [...state].map(item => {
        if (item.id === id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
    default:
      return state;  
  }
}

export default tasks;