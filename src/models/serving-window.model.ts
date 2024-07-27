import { WindowStatus } from '@/enums';
import { Ticket } from './ticket.model';

export interface ServingWindow {
  windowStatus: WindowStatus;
  windowName: string;
  nowServing?: Ticket;
  assignedPersonnelId?: number;
  _id: string;
}
