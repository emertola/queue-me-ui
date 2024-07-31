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

interface PersonnelListActionsProps {
  onAssign: (id: string) => void;
  windowsOptions: ServingWindow[];
}

const PersonnelListActions: FC<PersonnelListActionsProps> = ({
  onAssign,
  windowsOptions,
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
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Assign to window</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {windowsOptions.map((w) => (
              <DropdownMenuItem key={w._id} onClick={() => onAssign(w._id)}>
                {w.windowName}
              </DropdownMenuItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PersonnelListActions;
