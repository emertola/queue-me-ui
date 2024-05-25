import { TodoItem as Todo } from '../types/todo.interface';

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
}

const TodoItem = ({ todo, onCompletedChange }: TodoItemProps) => {
  return (
    <div className="border rounded-lg p-3 border-gray-300 bg-white hover:bg-slate-50">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
          className="scale-125"
        />
        <span className={todo.completed ? 'line-through text-gray-400' : ''}>
          {todo.title}
        </span>
      </label>
    </div>
  );
};

export default TodoItem;
