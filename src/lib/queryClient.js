// src/lib/queryClient.js
import { QueryClient } from "@tanstack/react-query";
import { apiClient } from "./apiClient";

// default query function
const defaultQueryFn = async ({ queryKey }) => {
  // First element in queryKey is treated as the endpoint
  // Example: useQuery({ queryKey: ["/me"] }) => GET /me
  const [endpoint] = queryKey;
  return apiClient.get(endpoint);
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      retry: 1,
      refetchOnWindowFocus: true,
      staleTime: 1000 * 60, // 1 minute
    },
  },
});
