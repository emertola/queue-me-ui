import { TicketStatus } from '@/enums';

export interface Ticket {
  _id?: string;
  ticketNumber?: number;
  status?: TicketStatus;
  window?: number;
  isPriority: boolean;
  firstName?: string;
  lastName?: string;
}
