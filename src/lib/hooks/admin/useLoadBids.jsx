import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic";

export default function useLoadBids() {
  const axiosPublic = useAxiosPublic();

  const {
    data: bids,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["bids"],
    queryFn: async () => {
      const response = await axiosPublic.get("/api/v1/bids");
      return response.data;
    },
  });

  return { bids, isLoading, error, refetch };
}
