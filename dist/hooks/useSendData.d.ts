import { AxiosRequestConfig } from "axios";
export declare const useSendData: (url: string, method: "POST" | "PUT" | "DELETE", body?: any, config?: AxiosRequestConfig) => import("react-query").UseMutationResult<any, unknown, void, unknown>;
