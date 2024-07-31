import { getWindowsList } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import AssignedWindow from './Window';
import { User } from '@/models';

const WindowsList: FC = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['swindows'],
    queryFn: () => getWindowsList(),
  });

  const currentUser: User = JSON.parse(
    localStorage.getItem('currentUser') as string
  );
  const currentUserId = currentUser?._id;

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div className="text-red-600">{error.message || 'Request failed.'}</div>
    );

  return (
    <div className="flex flex-wrap gap-4">
      {data?.data?.map((swindow) => (
        <div key={swindow._id}>
          <AssignedWindow
            isMe={swindow.assignedPersonnelId?._id === currentUserId}
            ticketNumber={swindow.nowServing?.ticketNumber}
            windowStatus={swindow.windowStatus}
            windowName={swindow.windowName}
          />
        </div>
      ))}
    </div>
  );
};

export default WindowsList;
