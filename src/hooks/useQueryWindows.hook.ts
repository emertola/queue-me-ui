import { WindowsQueryParams, getWindowsList } from "@/api";
import { useQuery } from "@tanstack/react-query";

const useQueryWindows = (params?: WindowsQueryParams) => {
  return useQuery({
    queryKey: ["swindows"],
    queryFn: () => getWindowsList(params),
  });
};
export default useQueryWindows;
