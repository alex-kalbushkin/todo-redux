import { ADD_TASK } from '../constants';

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

const tasks = (state = TASKS, {id, text, isCompleted, type}) => {
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
    default:
      return state;  
  }
}

export default tasks;