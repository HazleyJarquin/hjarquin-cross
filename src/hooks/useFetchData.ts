import { useQuery } from "react-query";
import axios, { AxiosRequestConfig } from "axios";

interface UseFetchDataProps {
  baseURL: string;
  endpoint: string;
  params?: Record<string, string | number>;
  config?: AxiosRequestConfig;
}

export const useFetchData = ({
  endpoint,
  params,
  config,
  baseURL,
}: UseFetchDataProps) => {
  return useQuery([endpoint, params], async () => {
    const queryParams = params
      ? new URLSearchParams(
          Object.entries(params).reduce<Record<string, string>>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {}
          )
        ).toString()
      : "";

    const url = `${baseURL}/${endpoint}${queryParams ? `?${queryParams}` : ""}`;
    const { data } = await axios.get(url, config);
    return data;
  });
};
