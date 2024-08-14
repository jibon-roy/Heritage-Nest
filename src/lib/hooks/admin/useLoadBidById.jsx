import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic";

export default function useLoadBidById(id) {
  const axiosPublic = useAxiosPublic();

  const {
    data: bid,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: [`bid-${id}`],
    queryFn: async () => {
      const response = await axiosPublic.get(`/api/v1/bid/${id}`);
      return response.data;
    },
  });

  return { bid, isLoading, error, refetch };
}
