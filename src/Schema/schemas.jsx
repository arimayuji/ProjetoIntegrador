
export const schemaCalculadora = yup.object().shape({
    P1: yup
        .number()
        .nullable(true, "Campo vazio")
        .positive("Apenas números positivos")
        .test("is-between", "Nota Inválida", function (value) {
            return value >= 0.0 && value <= 10.0;
        })
        .required("Preencher Campo")
        .min(0, "Valor menor que 0")
        .max(10, "Valor maior que 10"),
    P2: yup
        .number()
        .nullable(true, "Campo vazio")
        .required("Nota Inválida")
        .test("is-between", "Nota Inválida", function (value) {
            return value >= 0.0 && value <= 10.0;
        })
        .typeError("Inserir um número válido")
        .required("Preencher Campo")
        .test("is-between", "Nota Inválida", function (valor) {
            return valor >= 0.0 && valor <= 10.0;
        })
        .positive("Apenas números positivos")
        .min(0, "Valor menor que 0")
        .max(10, "Valor maior que 10"),
    T1: yup
        .number()
        .nullable(true, "Campo vazio")
        .required("Nota Inválida")
        .test("is-between", "Nota Inválida", function (value) {
            return value >= 0.0 && value <= 10.0;
        })
        .typeError("Inserir um número válido")
        .required("Preencher Campo")
        .test("is-between", "Nota Inválida", function (valor) {
            return valor >= 0.0 && valor <= 10.0;
        })
        .positive()
        .min(0, "Valor menor que 0")
        .max(10, "Valor maior que 10"),
    T2: yup
        .number()
        .nullable(true, "Campo vazio")
        .required("Nota Inválida")
        .test("is-between", "Nota Inválida", function (value) {
            return value >= 0.0 && value <= 10.0;
        })
        .positive()
        .min(0, "Valor menor que 0")
        .max(10, "Valor maior que 10"),
    PI: yup
        .number("valor errado")
        .nullable(true, "Campo vazio")
        .required("Nota Inválida")
        .test("is-between", "Nota Inválida", function (value) {
            return value >= 0.0 && value <= 10.0;
        })
        .positive()
        .min(0, "Valor menor que 0")
        .max(10, "Valor maior que 10"),
});
