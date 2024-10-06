/**
 * Represents a user in the system.
 *
 * @interface IUsers
 * @property {string} id - The unique identifier for the user.
 * @property {string} name - The name of the user.
 * @property {string} avatar - The URL or path to the user's avatar image.
 * @property {string} createdAt - The date and time when the user was created, in ISO 8601 format.
 *
 * @example
 * const user: IUsers = {
 *   id: "123abc",
 *   name: "John Doe",
 *   avatar: "https://example.com/avatar.jpg",
 *   createdAt: "2024-10-01T12:34:56Z"
 * };
 */
export interface IUsers {
  /** The unique identifier for the user. */
  id: string;

  /** The name of the user. */
  name: string;

  /** The URL or path to the user's avatar image. */
  avatar: string;

  /** The date and time when the user was created, in ISO 8601 format. */
  createdAt: string;
}
