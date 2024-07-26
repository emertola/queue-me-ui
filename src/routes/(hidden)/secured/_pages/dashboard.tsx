import Tickets from '@/components/features/Tickets';
import AssignedWindow from '@/components/features/Window';
import { ScrollArea } from '@/components/ui/scroll-area';
import { WindowStatus } from '@/enums';
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
        <div className="flex flex-wrap gap-4 p-2">
          <div>
            <AssignedWindow
              isMe={true}
              windowNumber={1}
              windowStatus={WindowStatus.ACTIVE}
              ticketNumber={1002}
            />
          </div>
          <div>
            <AssignedWindow
              isMe={false}
              windowNumber={1}
              windowStatus={WindowStatus.ACTIVE}
              ticketNumber={1002}
            />
          </div>
          <div>
            <AssignedWindow
              isMe={false}
              windowNumber={1}
              windowStatus={WindowStatus.IDLE}
              ticketNumber={1002}
            />
          </div>
          <div>
            <AssignedWindow
              isMe={false}
              windowNumber={1}
              windowStatus={WindowStatus.INACTIVE}
              ticketNumber={1002}
            />
          </div>
          <div>
            <AssignedWindow
              isMe={false}
              windowNumber={1}
              windowStatus={WindowStatus.ACTIVE}
              ticketNumber={1002}
            />
          </div>
          <div>
            <AssignedWindow
              isMe={true}
              windowNumber={1}
              windowStatus={WindowStatus.ACTIVE}
              ticketNumber={1002}
            />
          </div>
          <div>
            <AssignedWindow
              isMe={false}
              windowNumber={1}
              windowStatus={WindowStatus.ACTIVE}
              ticketNumber={1002}
            />
          </div>
          <div>
            <AssignedWindow
              isMe={false}
              windowNumber={1}
              windowStatus={WindowStatus.IDLE}
              ticketNumber={1002}
            />
          </div>
          <div>
            <AssignedWindow
              isMe={false}
              windowNumber={1}
              windowStatus={WindowStatus.INACTIVE}
              ticketNumber={1002}
            />
          </div>
          <div>
            <AssignedWindow
              isMe={false}
              windowNumber={1}
              windowStatus={WindowStatus.ACTIVE}
              ticketNumber={1002}
            />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Dashboard;
