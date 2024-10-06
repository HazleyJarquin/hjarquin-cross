import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  todo: Yup.string()
    .max(10, "Solo puedes escribir maximo 10 caracteres")
    .required("Todo es requerido"),
});
