import * as Yup from 'yup';

var userSchema = Yup.object().shape({
    todo: Yup.string()
        .max(10, "Solo puedes escribir maximo 10 caracteres")
        .required("Todo es requerido"),
});

export { userSchema };
//# sourceMappingURL=index.js.map
