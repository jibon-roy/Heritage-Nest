import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export default function useSearchProperties(query) {
  const axiosSecure = useAxiosPublic();

  const {
    data: properties,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: [query?.search],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/api/v1/properties/search`,
        query
      );
      return response.data;
    },
  });

  return { properties, isLoading, error, refetch };
}
