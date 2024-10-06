import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";

const queryClient = new QueryClient();

/**
 * Props for the QueryClientProviderWrapper component.
 *
 * @interface QueryProviderProps
 * @property {React.ReactNode} children - The child components that will be rendered within the QueryClientProvider.
 */
export interface QueryProviderProps {
  children: React.ReactNode;
}

/**
 * A wrapper component that provides the React Query client to the application.
 *
 * @param {QueryProviderProps} props - The props for the provider, including the `children` to render within the provider.
 * @returns {JSX.Element} A React component that wraps its children with `QueryClientProvider`, allowing the use of React Query within the component tree.
 *
 * @example
 * <QueryClientProviderWrapper>
 *   <MyComponent />
 * </QueryClientProviderWrapper>
 */
export const QueryClientProviderWrapper = ({
  children,
}: QueryProviderProps): JSX.Element => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
