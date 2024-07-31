import { Badge } from '@/components/ui/badge';
import { Gender, UserStatus } from '@/enums';
import { ServingWindow, User } from '@/models';
import { ColumnDef } from '@tanstack/react-table';
import PersonnelListAssignActions from './actions';

interface GetColumnsProps {
  onAssign: (personnelId: string, windowId: string) => void;
  windowsOptions: ServingWindow[];
}

export const getColumns = (actions: GetColumnsProps): ColumnDef<User>[] => [
  {
    accessorKey: 'lastName',
    header: 'Name',
    cell: ({ row }) => {
      return (
        <div>
          {row.original.lastName}, {row.original.firstName}
        </div>
      );
    },
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'gender',
    header: 'Gender',
    cell: ({ row }) => {
      return (
        <div>
          {Gender[row.original.gender?.toUpperCase() as keyof typeof Gender]}
        </div>
      );
    },
  },
  {
    id: 'assignedWindow',
    header: () => {
      return <div className="text-center">Assigned Window</div>;
    },
    cell: ({ row }) => {
      return (
        <div className="text-center">
          {row.original?.assignedWindow?.windowName}
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      return (
        <div>
          {row.original.active ? (
            <Badge
              variant="outline"
              className={`flex px-3 bg-lime-600 text-white text-[11px] w-fit border-0`}>
              {UserStatus.ACTIVE}
            </Badge>
          ) : (
            <Badge
              variant="outline"
              className={`flex px-3 bg-gray-200 text-slate-800 text-[11px] w-fit border-0`}>
              {UserStatus.INACTIVE}
            </Badge>
          )}
        </div>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      if (row.original?.assignedWindow) {
        return <></>;
      }
      return (
        <PersonnelListAssignActions
          personnelId={row.original?._id as string}
          onAssign={actions.onAssign}
          windowsOptions={actions.windowsOptions}
        />
      );
    },
  },
];
