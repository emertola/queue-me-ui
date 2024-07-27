import Tickets from '@/components/features/Tickets';
import WindowsList from '@/components/features/WindowsList';
import { ScrollArea } from '@/components/ui/scroll-area';
import { createFileRoute } from '@tanstack/react-router';
import { FC } from 'react';

export const Route = createFileRoute('/(hidden)/secured/_pages/dashboard')({
  component: () => <Dashboard />,
});

const Dashboard: FC = () => {
  return (
    <div className="flex h-full">
      <div className="w-1/4">
        <Tickets />
      </div>
      <ScrollArea className="h-[--vh-less-80] w-11/12 p-5">
        <WindowsList />
      </ScrollArea>
    </div>
  );
};

export default Dashboard;
