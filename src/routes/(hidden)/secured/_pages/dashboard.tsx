import Tickets from '@/components/features/Tickets';
import WindowsList from '@/components/features/WindowsList';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { createFileRoute } from '@tanstack/react-router';
import { FC } from 'react';

export const Route = createFileRoute('/(hidden)/secured/_pages/dashboard')({
  component: () => <Dashboard />,
});

const Dashboard: FC = () => {
  return (
    <div className="h-full">
      <div className="flex">
        <Card className="w-1/4 mx-4 mt-4">
          <Tickets />
        </Card>
        <ScrollArea className="h-[--vh-less-80] w-11/12 mt-4">
          <WindowsList />
        </ScrollArea>
      </div>
    </div>
  );
};

export default Dashboard;
