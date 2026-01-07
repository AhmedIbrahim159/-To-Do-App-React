function TodoList({ todos, ToggleTask }) {
    return (
        <div className="todo-list">
            <h2>My To-Do List</h2>
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className={`todo-item ${todo.completed ? 'completed' : ''}`}
                        onClick={() => ToggleTask(todo.id)}
                    >
                        <div className="todo-checkbox"></div>
                        <span className="todo-text">{todo.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default TodoList;