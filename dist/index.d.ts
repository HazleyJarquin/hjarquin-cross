import * as react_query from 'react-query';
import { AxiosRequestConfig } from 'axios';

declare const useGetAllUsers: () => react_query.UseQueryResult<any, unknown>;

declare const useSendData: (url: string, method: "POST" | "PUT" | "DELETE", body?: any, config?: AxiosRequestConfig) => react_query.UseMutationResult<any, unknown, void, unknown>;

export { useGetAllUsers, useSendData };
