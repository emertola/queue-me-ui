import { TicketStatus } from '@/enums';

export interface Ticket {
  _id?: string;
  ticketNumber?: number;
  status?: TicketStatus;
  servingWindow?: string;
  isPriority: boolean;
  firstName?: string;
  lastName?: string;
}

export interface AssignTicket {
  ticket: Ticket;
  personnelId: string;
}
