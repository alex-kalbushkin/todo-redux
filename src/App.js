import React from 'react';

import ToDo from './containers/todo/todo';
import Title from './components/title/Title';


const App = () => (
  <div>
    <Title title='To-Do' />
    <ToDo />  
  </div>    
);

export default App;

