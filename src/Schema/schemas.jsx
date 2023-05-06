
export const schemaCalculadora = yup.object().shape({
    P1: yup
        .number("Apenas números")
        .positive("Apenas números positivos")
        .test("is-between", "Nota Inválida", function (value) {
            return value >= 0.0 && value <= 10.0;
        })
        .required("Nota Inválida")
        .min(0)
        .max(10),
    P2: yup
        .number("Apenas números")
        .required("Nota Inválida")
        .test("is-between", "Nota Inválida", function (value) {
            return value >= 0.0 && value <= 10.0;
        })
        .positive("Apenas números positivos")
        .min(0)
        .max(10),
    T1: yup
        .number("Apenas números")
        .required("Nota Inválida")
        .test("is-between", "Nota Inválida", function (value) {
            return value >= 0.0 && value <= 10.0;
        })
        .positive("Apenas números positivos")
        .min(0)
        .max(10),
    T2: yup
        .number("Apenas números")
        .required("Nota Inválida")
        .test("is-between", "Nota Inválida", function (value) {
            return value >= 0.0 && value <= 10.0;
        })
        .positive("Apenas números positivos")
        .min(0)
        .max(10),
    PI: yup
        .number("Apenas números")
        .required("Nota Inválida")
        .test("is-between", "Nota Inválida", function (value) {
            return value >= 0.0 && value <= 10.0;
        })
        .positive("Apenas números positivos")
        .min(0)
        .max(10),
});
