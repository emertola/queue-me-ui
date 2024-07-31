import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ServingWindow } from '@/models';
import { Ellipsis } from 'lucide-react';
import { FC } from 'react';

interface PersonnelListAssignActionsProps {
  personnelId: string;
  onAssign: (personnelId: string, window: string, assign: boolean) => void;
  windowsOptions: ServingWindow[];
  currentWindowId?: string;
}

const PersonnelListAssignActions: FC<PersonnelListAssignActionsProps> = ({
  personnelId,
  onAssign,
  windowsOptions,
  currentWindowId,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="block max-w-max ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 hover:bg-transparent">
          <Ellipsis size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        {!currentWindowId && (
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Assign window</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              {windowsOptions.map((w) => (
                <DropdownMenuItem
                  key={w._id}
                  onClick={() => onAssign(personnelId, w._id, true)}>
                  {w.windowName}
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        )}
        {currentWindowId && (
          <DropdownMenuItem
            onClick={() => onAssign(personnelId, currentWindowId, false)}>
            Unassign window
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PersonnelListAssignActions;
