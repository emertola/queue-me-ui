import { getWindowsList } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { FC, useEffect, useState } from 'react';
import AssignedWindow from './Window';
import { ServingWindow, User, WebSocketContent } from '@/models';

const WindowsList: FC = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['swindows'],
    queryFn: () => getWindowsList(),
  });
  const [windowsList, setWindowsList] = useState<ServingWindow[]>(
    data?.data || []
  );

  const currentUser: User = JSON.parse(
    localStorage.getItem('currentUser') as string
  );
  const currentUserId = currentUser?._id;

  useEffect(() => {
    if (data?.data) {
      setWindowsList(data?.data);
    }
  }, [data?.data]);

  useEffect(() => {
    // Set up WebSocket connection
    const ws = new WebSocket('ws://localhost:4001');

    ws.onmessage = (event) => {
      if (event?.data) {
        const parsedEvent: WebSocketContent<{
          windowId: string;
          updatedWindow: ServingWindow;
        }> = JSON.parse(event.data as string);
        const updatedWindowsList: ServingWindow[] = windowsList.map((d) =>
          d._id === parsedEvent.content.windowId
            ? { ...d, ...parsedEvent.content.updatedWindow }
            : d
        );
        setWindowsList(updatedWindowsList);
      }

      // setWindowsList([])
    };

    return () => ws.close();
  }, [windowsList]);

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div className="text-red-600">{error.message || 'Request failed.'}</div>
    );

  return (
    <div className="flex flex-wrap gap-4">
      {windowsList?.map((swindow) => (
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
