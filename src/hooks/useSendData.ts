import axios, { AxiosRequestConfig } from "axios";
import { useMutation } from "react-query";

export const useSendData = (
  url: string,
  method: "POST" | "PUT" | "DELETE",
  body?: any,
  config?: AxiosRequestConfig
) => {
  return useMutation(async () => {
    const { data } = await axios({
      url,
      method,
      data: body,
      ...config,
    });
    return data;
  });
};
