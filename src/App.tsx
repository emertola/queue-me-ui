import { useState } from 'react';
import TodoItem from './components/TodoItem';
import { TODOS } from './data/todos.const';
import { TodoItem as TodoListItem } from './types/todo.interface';
import AddTodoItem from './components/AddTodoItem';

function App() {
  const [todos, setTodos] = useState<TodoListItem[]>(TODOS);

  const setTodoCompleted = (id: number, completed: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  const addTodo = (title: string) => {
    const newTodo: TodoListItem = {
      id: todos.length + 1,
      title,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <main className="py-10 h-screen space-y-5">
        <h1 className="text-4xl font-semibold text-center">Todos:</h1>
        <div className="max-w-2xl mx-auto bg-slate-100 rounded-md p-8">
          <div className="space-y-2">
            <AddTodoItem onSubmit={addTodo} />
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onCompletedChange={() =>
                  setTodoCompleted(todo.id, !todo.completed)
                }
                onDelete={deleteTodo}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
