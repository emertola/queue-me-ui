import TodoItem from './components/TodoItem';
import { TODOS } from './data/todos.const';

function App() {
  return (
    <>
      <main className="py-10 h-screen space-y-5">
        <h1 className="text-4xl font-semibold text-center">Todos:</h1>
        <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-8">
          <div className="space-y-2">
            {TODOS.map((todo) => (
              <TodoItem todo={todo} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
