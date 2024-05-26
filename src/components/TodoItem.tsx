import { TodoItem as Todo } from '../types/todo.interface';

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onCompletedChange, onDelete }: TodoItemProps) => {
  return (
    <div className="flex items-center content-between border rounded-lg p-3 border-gray-300 bg-white hover:bg-slate-50">
      <label className="flex items-center w-full gap-2">
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
      <button
        type="button"
        onClick={() => onDelete(todo.id)}
        className="rounded-full bg-red-600 text-white text-xs py-1 px-2">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
