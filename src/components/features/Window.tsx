'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { WindowStatus } from '@/enums';
import { FC } from 'react';
import { Badge } from '@/components/ui/badge';
import { Check, CircleUserRound, Hourglass, X } from 'lucide-react';
import TooltipPlaceholder from '../shared/TooltipPlaceholder';

interface AssignedWindowProps {
  isMe: boolean;
  ticketNumber: number;
  windowStatus: WindowStatus;
  windowNumber: number;
}

const AssignedWindow: FC<AssignedWindowProps> = ({
  isMe,
  ticketNumber,
  windowStatus,
  windowNumber,
}) => {
  const status = (): string => {
    if (windowStatus === WindowStatus.ACTIVE) return 'Active';
    else if (windowStatus === WindowStatus.IDLE) return 'Idle';
    else return 'Inactive';
  };
  const colorStatus = (): string => {
    if (windowStatus === WindowStatus.ACTIVE) return 'bg-lime-600 text-white';
    else if (windowStatus === WindowStatus.IDLE)
      return 'bg-yellow-500 text-white';
    else return 'bg-gray-300 text-slate-800';
  };
  return (
    <Card className="min-w-72">
      <CardHeader className="pb-2">
        <CardContent className="relative px-0">
          <div className="flex items-center justify-between">
            NOW SERVING
            <Badge
              variant="outline"
              className={`flex px-2 text-gray-700 ${!isMe ? 'hidden' : ''}`}>
              <CircleUserRound size={15} className="mr-1" />
              You
            </Badge>
          </div>
          <TooltipPlaceholder text={status()}>
            <div
              className={`rounded-full w-fit p-1 absolute -top-8 -right-8 cursor-pointer ${colorStatus()}`}>
              <Check
                size={12}
                className={
                  windowStatus === WindowStatus.ACTIVE ? 'block' : 'hidden'
                }
              />
              <Hourglass
                size={12}
                className={
                  windowStatus === WindowStatus.IDLE ? 'block' : 'hidden'
                }
              />
              <X
                size={12}
                className={
                  windowStatus === WindowStatus.INACTIVE ? 'block' : 'hidden'
                }
              />
            </div>
          </TooltipPlaceholder>
          <div className="text-5xl text-center mt-4 font-bold">
            {ticketNumber}
          </div>
        </CardContent>
      </CardHeader>
      <CardFooter className="p-0">
        <div className="w-full border-t bg-blue-600 text-white rounded-b-lg text-center font-semibold py-1">
          WINDOW {windowNumber}
        </div>
      </CardFooter>
    </Card>
  );
};

export default AssignedWindow;
