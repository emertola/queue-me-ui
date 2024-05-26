import { TodoItem as Todo } from '../types/todo.interface';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  setTodoCompleted: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({ todos, setTodoCompleted, onDelete }: TodoListProps) => {
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
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
