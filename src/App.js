import React from 'react';
import TodoList from './todo/todolist';
import TodoItem from './todo/todoitem';
function App() {
  const todos = [
    {id: 1, completed: false, title: 'Купить хлеб'},
    {id: 2, completed: false, title: 'Купить молоко'},
    {id: 3, completed: false, title: 'Купить масло'}
  ]
  return (
    <div className='wrapper'>
      <h1>Hello</h1>
      <TodoList todos={todos} />
    </div>
  )
}

export default App;

