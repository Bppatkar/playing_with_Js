import React from 'react';

const TodoList = ({ todos, onDelete, onUpdate }) => {
  // console.log(todos);

  return (
    <div>
      <h2>Here is todoList</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <div
              style={{
                textDecoration: todo.isActive ? 'none' : 'line-through',
              }}
            >
              {todo.title}
              <p>{todo.description}</p>
            </div>
            <button
              onClick={() => onUpdate(todo._id, { isActive: !todo.isActive })}
            >
              {todo.isActive ? 'Mark Complete' : 'Mark Active'}
            </button>
            <button onClick={() => onDelete(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
