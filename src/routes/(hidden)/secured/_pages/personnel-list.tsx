import PersonnelList from '@/components/features/PersonnelList';
import { createFileRoute } from '@tanstack/react-router';
import { FC } from 'react';

export const Route = createFileRoute('/(hidden)/secured/_pages/personnel-list')(
  {
    component: () => <Personnel />,
  }
);

const Personnel: FC = () => {
  return (
    <div className="w-full h-full">
      <PersonnelList />
    </div>
  );
};

export default Personnel;
