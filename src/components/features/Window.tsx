"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { WindowStatus } from "@/enums";
import { FC } from "react";
import { Badge } from "@/components/ui/badge";
import { CircleUserRound } from "lucide-react";

interface AssignedWindowProps {
  isMe?: boolean;
  ticketNumber?: number;
  windowStatus: WindowStatus;
  windowName: string;
}

const AssignedWindow: FC<AssignedWindowProps> = ({
  isMe,
  ticketNumber,
  windowStatus,
  windowName,
}) => {
  const status = (): string => {
    if (windowStatus === WindowStatus.ACTIVE) return "Active";
    else if (windowStatus === WindowStatus.IDLE) return "Idle";
    else return "Inactive";
  };
  const colorStatus = (): string => {
    if (windowStatus === WindowStatus.ACTIVE) return "bg-lime-600 text-white";
    else if (windowStatus === WindowStatus.IDLE)
      return "bg-yellow-500 text-white";
    else return "bg-gray-300 text-slate-800";
  };
  return (
    <Card className="min-w-72">
      <CardHeader className="pb-2">
        <CardContent className="relative px-0">
          <div className="flex items-center justify-between">
            {windowStatus === WindowStatus.ACTIVE
              ? "NOW SERVING"
              : "PLEASE WAIT"}
            <Badge
              variant="outline"
              className={`flex px-2 border-0 text-[11px] ${colorStatus()}`}>
              {status()}
            </Badge>
            <Badge
              variant="outline"
              className={`flex px-[.25rem] py-[0.02rem] text-gray-700 absolute bottom-0 right-0 ${!isMe ? "hidden" : ""}`}>
              <CircleUserRound size={12} className="mr-1" />
              <span className="text-[10px]">You</span>
            </Badge>
          </div>
          <div className="text-5xl text-center mt-4 font-bold">
            {ticketNumber ?? "--"}
          </div>
        </CardContent>
      </CardHeader>
      <CardFooter className="p-0">
        <div className="w-full border-t bg-blue-600 text-white rounded-b-lg text-center font-semibold py-1">
          {windowName ? `WINDOW ${windowName}` : "--"}
        </div>
      </CardFooter>
    </Card>
  );
};

export default AssignedWindow;
