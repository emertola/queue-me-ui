import { AssignTicket, PagedParams, PagedResponse, Ticket } from "@/models";
import { FC, useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, Ellipsis, Search } from "lucide-react";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import usePagedQuery from "@/hooks/paged-query.hook";
import { assignTicket, getCurrentUser, getTicketsList } from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const pagedParams = new PagedParams();

const Tickets: FC = () => {
  const queryClient = useQueryClient();
  const [params, setParams] = useState(pagedParams);
  const [selected, setSelected] = useState<string>();
  const { data, error, isLoading } = usePagedQuery(params, ["tickets"], () =>
    getTicketsList(params)
  );
  const responseData = data as PagedResponse<Ticket>;

  const setPage = (args?: PagedParams) => {
    if (args?.page && args?.page < 0) {
      args.page = 0;
    }
    const newParams = args ? { ...args } : { ...params };
    setParams((prevParams) => ({ ...prevParams, ...newParams }));
  };

  const setActiveTicket = (id: string | undefined) => {
    if (id) setSelected(id);
  };

  const mutation = useMutation({
    mutationFn: assignTicket,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tickets", "swindows"] });
    },
  });

  const handleAssign = (ticket: Ticket) => {
    const personnelId = getCurrentUser();
    if (personnelId) {
      const payload: AssignTicket = {
        ticket,
        personnelId,
      };
      mutation.mutate(payload);
    }
  };

  if (isLoading) return <p>...Loading</p>;
  if (error)
    return (
      <div className="text-red-600">{error.message || "Request failed."}</div>
    );

  return (
    <div className="bg-white h-full py-4 rounded-xl">
      <div className="h-full flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 mb-4 px-5">
            Queue List
          </h1>
          <div className="w-full mb-10 px-5">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search number..."
                className="w-full appearance-none bg-background pl-8 shadow-none"
              />
            </div>
          </div>

          <ScrollArea className="h-[--vh-less-300] w-full px-5">
            {responseData?.results?.map((ticket) => (
              <div key={ticket._id} onClick={() => setActiveTicket(ticket._id)}>
                <div
                  className={`p-3 rounded-xl focus-visible:outline-transparent hover:bg-gray-50 ${selected === ticket._id ? "shadow-md border border-slate-100" : ""}`}>
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold ml-1 mr-4">
                        {ticket.ticketNumber}
                      </h3>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="block max-w-max ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 hover:bg-transparent">
                            <Ellipsis size={20} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem
                            onClick={() => handleAssign(ticket)}>
                            Assign to me
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span className="text-red-500">Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge
                        variant={!ticket.isPriority ? "secondary" : null}
                        className={`font-normal ${
                          ticket.isPriority
                            ? "bg-amber-500 text-white font-semibold border-transparent"
                            : ""
                        }`}>
                        {ticket.isPriority ? "Priority" : "Regular Transaction"}
                      </Badge>
                      <span className="text-slate-400 text-xs">Waiting</span>
                    </div>
                  </div>
                </div>
                <div
                  className={`h-px bg-gray-100 mx-4 ${selected === ticket._id ? "hidden" : "block"}`}></div>
              </div>
            ))}
          </ScrollArea>
        </div>
        <div className="text-center pt-4">
          <Button
            variant="outline"
            className="mr-5 rounded-xl px-2 py-1"
            disabled={!responseData?.currentPage}
            onClick={() =>
              setPage({ page: params.page - 1, size: params.size })
            }>
            <ChevronLeft size={20} />
          </Button>
          <Button
            variant="outline"
            className="rounded-xl px-2 py-1"
            disabled={!responseData?.hasNextPage}
            onClick={() =>
              setParams((prev) => ({ ...prev, page: prev.page + 1 }))
            }>
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
