import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <div className="flex justify-center py-5 text-gray-700 mt-20">
      <div className="w-1/4 bg-slate-100 min-h-32 p-10 rounded-xl">
        <h1 className="text-2xl text-center">
          Welcome to the
          <br /> <span className="font-bold">CueMii</span> app.
        </h1>
        <div className="text-center mt-10">
          <p>Click the button to get on queue.</p>
          <Button className="mt-5">
            <Plus size={20} className="mr-2" />
            <span>Add Queue</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
