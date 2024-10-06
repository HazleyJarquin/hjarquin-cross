import * as Yup from "yup";

/**
 * A Yup validation schema for validating a user's todo input.
 *
 * @type {Yup.ObjectSchema} Schema to validate the 'todo' input field.
 * @property {Yup.string} todo - The todo input field, which must be a string, required, and limited to a maximum of 10 characters.
 *
 * @example
 * const validation = userSchema.validate({ todo: "Buy milk" });
 * validation
 *   .then(() => console.log("Valid!"))
 *   .catch(err => console.error(err.errors));
 */
export const userSchema = Yup.object().shape({
  todo: Yup.string()
    .max(10, "Solo puedes escribir maximo 10 caracteres")
    .required("Todo es requerido"),
});
