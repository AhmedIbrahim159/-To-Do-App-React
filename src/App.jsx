
import './App.css'
import { useEffect, useState } from 'react'
import TodoList from './componets/todolist'

function App() {
  const [newTask, setNewTask] = useState('')
  const addTask = () => {
    if (newTask.trim() === '') return
    const newTodo = {
      id: Date.now(),
      title: newTask,
      completed: false
    }
    setTodos([...todos, newTodo])
    setNewTask('')
  }
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res=>res.json())
    .then(data => setTodos(data))
  }, [])
  const toggleمTask = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    setTodos(updatedTodos)
  }
  return (
    <div className="app-container">
      <TodoList todos={todos} ToggleTask={toggleTask} />
      <div className="todo-input">
        <input
          type="text"
          placeholder="Add new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  )
}

export default App
