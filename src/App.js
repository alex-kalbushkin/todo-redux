import React from 'react';

import ToDo from './containers/todo/todo';
import Title from './components/title/Title';


const App = () => (
  <div className='main-wrapper'>
    <Title title='To-Do' />
    <ToDo />  
  </div>    
);

export default App;

