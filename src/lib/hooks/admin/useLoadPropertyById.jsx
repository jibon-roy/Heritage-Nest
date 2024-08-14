import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../useAxiosSecure";

export default function useLoadPropertyById(id) {
  const axiosSecure = useAxiosSecure();

  const {
    data: properties,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["property"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/api/v1/properties/${id}`);
      return response.data;
    },
  });

  return { properties, isLoading, error, refetch };
}
