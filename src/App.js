import React from 'react';
import Form from './components/form';
import TodoList from './components/todoList';
import Filter from './components/filter';

function App() {
  return (
    <div className="App">
      <Form/>
      <TodoList/>
      <Filter/>
    </div>
  );
}

export default App;
