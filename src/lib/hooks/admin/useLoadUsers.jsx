import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../useAxiosSecure";
// import { useState } from "react";
// import { useEffect } from "react";

export default function useLoadUsers() {
  const axiosSecure = useAxiosSecure();

  const {
    data: users,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosSecure.get("/api/v1/users");
      return response.data;
    },
  });

  return { users, isLoading, error, refetch };
}
