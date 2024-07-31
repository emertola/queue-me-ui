import { WindowStatus } from '@/enums';
import { Ticket } from './ticket.model';
import { User } from './user.model';

export interface ServingWindow {
  windowStatus: WindowStatus;
  windowName: string;
  nowServing?: Ticket;
  assignedPersonnelId?: User;
  _id: string;
}
