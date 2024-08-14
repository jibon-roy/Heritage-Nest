import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export default function useLoadUsersByEmail(emails) {
  const axiosSecure = useAxiosPublic();
  // console.log(emails);
  // const emailArr = emails?.split(",");

  const {
    data: users,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users-by-email", emails],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/api/v1/users/emails`,
        [...emails],
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },
    enabled: emails.length > 0,
  });

  return { users, isLoading, error, refetch };
}
