import { CHANGE_FILTER } from '../constants';

const INITIAL_FILTER = 'all';

const filter = (state = INITIAL_FILTER, {type, switchFilter}) => {
  switch (type) {
    case CHANGE_FILTER:
      return switchFilter;      
    default:
      return state;
  }  
}

export default filter;