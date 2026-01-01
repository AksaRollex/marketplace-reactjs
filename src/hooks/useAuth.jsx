import { useQuery } from "@tanstack/react-query";
import api from "../libs/axios";

export const useAuth = () => {
  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["auth", "user"],
    queryFn: async () => {
      // Assuming the endpoint to get the authenticated user is '/user'
      // Adjust if your backend is different (e.g., '/auth/me')
      const response = await api.get("/auth/me");
      return response.data;
    },
    // Only fetch if a token exists
    enabled: !!localStorage.getItem("token"),
    retry: 1,
  });

  return { user, isLoading, isError, error };
};
