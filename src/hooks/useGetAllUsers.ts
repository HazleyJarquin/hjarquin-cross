import { useQuery } from "react-query";
import axios from "axios";

const getAllUsers = async () => {
  const response = await axios.get(
    "https://6172cfe5110a740017222e2b.mockapi.io/elements",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response?.data;
};
export const useGetAllUsers = () => {
  return useQuery(["getAllUsers"], {
    async queryFn() {
      return getAllUsers();
    },
  });
};
