import { FC } from 'react';
import { Outlet } from '@tanstack/react-router';

const Root: FC = () => {
  return (
    <div className="my-2">
      <Outlet />
    </div>
  );
};

export default Root;
