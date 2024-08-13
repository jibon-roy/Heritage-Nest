import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../useAxiosSecure";
// import { useState } from "react";
// import { useEffect } from "react";

export default function useLoadUsers() {
  const axiosSecure = useAxiosSecure();
  //   const [users, setUsers] = useState([]);

  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       try {
  //         const response = await axiosSecure.get("/api/v1/users");
  //         setUsers(response.data);
  //       } catch (error) {
  //         console.error("Error fetching users:", error);
  //       }
  //     };

  //     fetchUsers();
  //   }, [axiosSecure]);

  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosSecure.get("/api/v1/users");
      return response.data;
    },
  });

  return { users, isLoading, error };
}
