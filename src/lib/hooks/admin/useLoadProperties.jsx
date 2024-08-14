import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../useAxiosSecure";

export default function useLoadProperties() {
  const axiosSecure = useAxiosSecure();

  const {
    data: properties,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const response = await axiosSecure.get("/api/v1/properties");
      return response.data;
    },
  });

  return { properties, isLoading, error, refetch };
}
