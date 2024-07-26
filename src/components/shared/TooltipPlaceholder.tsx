import { FC, ReactNode } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

interface TooltipPlaceholderProps {
  children: ReactNode;
  text: string;
}

const TooltipPlaceholder: FC<TooltipPlaceholderProps> = ({
  children,
  text,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>{text}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipPlaceholder;
