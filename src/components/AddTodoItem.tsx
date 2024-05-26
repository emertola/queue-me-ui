import { useState } from 'react';

interface AddTodoItemProps {
  onSubmit: (title: string) => void;
}

const AddTodoItem = ({ onSubmit }: AddTodoItemProps) => {
  const [title, setTitle] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim()) return;

    onSubmit(title);
    setTitle('');
  };

  return (
    <form
      className="flex"
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo item..."
        className="rounded-s-md grow border border-gray-400 p-2"
      />

      <button
        type="submit"
        className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800">
        Add
      </button>
    </form>
  );
};

export default AddTodoItem;
