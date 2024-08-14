import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./../useAxiosSecure";
import useAxiosPublic from "../useAxiosPublic";

export default function useLoadPropertyById(id) {
  const axiosSecure = useAxiosPublic();

  const {
    data: property,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["property-id"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/api/v1/property/${id}`);
      return response.data;
    },
  });

  return { property, isLoading, error, refetch };
}
