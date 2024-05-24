import { TodoItem as Todo } from '../types/todo.interface';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <div>
      <label className="flex items-center gap-2 border rounded-lg p-3 border-gray-300 bg-white hover:bg-slate-50">
        <input type="checkbox" className="scale-125" />
        <span className={todo.completed ? 'line-through text-gray-400' : ''}>
          {todo.title}
        </span>
      </label>
    </div>
  );
};

export default TodoItem;
