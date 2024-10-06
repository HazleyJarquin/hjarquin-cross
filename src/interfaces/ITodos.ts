/**
 * Represents a todo item.
 *
 * @interface ITodos
 * @property {number} id - The unique identifier for the todo item.
 * @property {string} title - The title or description of the todo item.
 * @property {boolean} isCompleted - Indicates whether the todo item is completed or not.
 *
 * @example
 * const todo: ITodos = {
 *   id: 1,
 *   title: "Complete TypeDoc setup",
 *   isCompleted: false
 * };
 */
export interface ITodos {
  /** The unique identifier for the todo item. */
  id: number;

  /** The title or description of the todo item. */
  title: string;

  /** Indicates whether the todo item is completed or not. */
  isCompleted: boolean;
}
