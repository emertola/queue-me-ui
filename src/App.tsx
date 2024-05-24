import { useState } from 'react';
import TodoItem from './components/TodoItem';
import { TODOS } from './data/todos.const';
import { TodoItem as TodoListItem } from './types/todo.interface';

function App() {
  const [todos, setTodos] = useState<TodoListItem[]>(TODOS);

  const setTodoCompleted = (id: number, completed: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  return (
    <>
      <main className="py-10 h-screen space-y-5">
        <h1 className="text-4xl font-semibold text-center">Todos:</h1>
        <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-8">
          <div className="space-y-2">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onCompletedChange={() =>
                  setTodoCompleted(todo.id, !todo.completed)
                }
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
