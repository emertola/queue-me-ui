import { TodoItem as Todo } from '../types/todo.interface';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  setTodoCompleted: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({ todos, setTodoCompleted, onDelete }: TodoListProps) => {
  const todosSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <div className="space-y-2">
      {todosSorted.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCompletedChange={setTodoCompleted}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
