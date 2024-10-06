import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";

const queryClient = new QueryClient();

interface QueryProviderProps {
  children: React.ReactNode;
}

export const QueryClientProviderWrapper = ({
  children,
}: QueryProviderProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
