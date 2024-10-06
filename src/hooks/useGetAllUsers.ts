import { useQuery } from "react-query";
import axios from "axios";

/**
 * Fetches all users from the API.
 *
 * @returns {Promise<any>} A promise that resolves to an array of user objects.
 * @throws {Error} Throws an error if the request fails.
 *
 * @example
 * const users = await getAllUsers();
 * console.log(users);
 */
const getAllUsers = async (): Promise<any> => {
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

/**
 * Custom hook that fetches all users using React Query.
 *
 * @returns {UseQueryResult<any, Error>} An object containing the status, data, and other properties from `useQuery`.
 *
 * @example
 * const { data, isLoading, error } = useGetAllUsers();
 * if (isLoading) return <p>Loading...</p>;
 * if (error) return <p>Error loading users</p>;
 * return (
 *   <div>
 *     {data.map(user => (
 *       <p key={user.id}>{user.name}</p>
 *     ))}
 *   </div>
 * );
 */
export const useGetAllUsers = () => {
  return useQuery(["getAllUsers"], {
    async queryFn() {
      return getAllUsers();
    },
  });
};
