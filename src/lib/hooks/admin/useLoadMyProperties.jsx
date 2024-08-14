import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../useAxiosSecure";

export default function useLoadPropertiesByEmail(email) {
  const axiosSecure = useAxiosSecure();

  const {
    data: properties,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["my-properties"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/api/v1/properties/${email}`);
      return response.data;
    },
  });

  return { properties, isLoading, error, refetch };
}
