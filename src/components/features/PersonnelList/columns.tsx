import { Gender } from '@/enums';
import { User } from '@/models';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<User>[] = [
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
  { accessorKey: 'status', header: 'Status' },
];
