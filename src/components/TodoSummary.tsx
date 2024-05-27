import { TodoItem as Todo } from '../types/todo.interface';

interface TodoSummaryProps {
  todos: Todo[];
  deleteCompleted: () => void;
}

const TodoSummary = ({ todos, deleteCompleted }: TodoSummaryProps) => {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="text-center space-y-2">
      <p className="text-sm font-medium">
        {completedTodos.length}/{todos.length} todos completed
      </p>
      {completedTodos.length > 0 && (
        <button
          className="text-red-500 hover:underline text-sm font-medium"
          onClick={deleteCompleted}>
          Delete completed
        </button>
      )}
    </div>
  );
};

export default TodoSummary;
