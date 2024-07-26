import Tickets from '@/components/shared/Tickets';
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
      <div>windows here</div>
    </div>
  );
};

export default Dashboard;
