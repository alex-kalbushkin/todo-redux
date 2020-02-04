import { ADD_TASK, REMOVE_TASK, COMPLETED_TASK } from '../constants';

export const addTask = (id, text, isCompleted) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted,
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  id,
});

export const completedTask = (id) => ({
  type: COMPLETED_TASK,
  id,
});