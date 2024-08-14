import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../useAxiosSecure";

export default function useLoadPropertyById(id) {
  const axiosSecure = useAxiosSecure();

  const {
    data: property,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["property"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/api/v1/property/${id}`);
      return response.data;
    },
  });

  return { property, isLoading, error, refetch };
}
