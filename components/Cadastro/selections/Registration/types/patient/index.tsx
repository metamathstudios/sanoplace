import * as Yup from "yup";
import { Formik } from "formik";
import styles from "./styles.module.scss";

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
  terms: false,
};

const savedValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
  terms: false,
};

const validationSchema = function (values: any) {
  return Yup.object().shape({
    name: Yup.string()
      .min(2, `Seu nome tem que ter no mínimo 2 caracteres.`)
      .required("Campo obrigatório."),
    email: Yup.string().email("Email inválido.").required("Campo obrigatório."),
    password: Yup.string()
      .min(6, `Senha pequena`)
      .required("Campo obrigatório."),
    passwordConfirm: Yup.string()
      .oneOf([values.password], "As senhas devem ser iguais.")
      .required("Campo obrigatório."),
    terms: Yup.boolean().oneOf(
      [true],
      "Você precisa concordar com os termos de uso."
    ),
  });
};

const getErrorsFromValidationError = (validationError: any) => {
  const FIRST_ERROR = 0;
  return validationError.inner.reduce((errors: any, error: any) => {
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR],
    };
  }, {});
};

const validate = (getValidationSchema: any) => {
  return (values: any) => {
    const validationSchema = getValidationSchema(values);
    try {
      validationSchema.validateSync(values, { abortEarly: false });
      return {};
    } catch (error) {
      return getErrorsFromValidationError(error);
    }
  };
};

const Patient = () => {
  const onSubmit = async (values: any, { setSubmitting, setErrors }: any) => {
    setSubmitting(false);
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate(validationSchema)}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        status,
        dirty,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid,
        handleReset,
        setTouched,
      }) => (
        <form
          className={styles.form}
          onSubmit={async (e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
          noValidate
        >
          <div>
            <div className={styles.item}>
              <label>Nome*</label>
              <label className={styles.error}>{errors.name}</label>
              <input
                id="nameInput"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className={styles.item}>
              <label>E-mail*</label>
              <label className={styles.error}>{errors.email}</label>
              <input
                type="text"
                id="emailInput"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className={styles.double}>
              <div className={styles.selfItem}>
                <label>Senha*</label>
                <label className={styles.error}>{errors.password}</label>
                <input
                  type="password"
                  id="passwordInput"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className={styles.selfItem}>
                <label>Confirmar senha*</label>
                <label className={styles.error}>{errors.passwordConfirm}</label>
                <input
                  type="password"
                  id="passwordConfirmInput"
                  name="passwordConfirm"
                  value={values.passwordConfirm}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
          </div>
          <div className={styles.terms}>
            <span>
              <input
                type="checkbox"
                id="termsInput"
                name="terms"
                onChange={(e) => {
                  handleChange(e);
                  const input = document.getElementById(
                    "termsInput"
                  ) as HTMLInputElement;
                  if (input) {
                    if (input.checked) {
                      values.terms = true;
                    }
                  }
                }}
                onBlur={handleBlur}
              />{" "}
              Termos de Uso e
              <span className={styles.contrast}> Política de Privacidade</span>
            </span>
            <label className={styles.error}>{errors.terms}</label>
          </div>
          <button className={styles.button} type="submit">
            <span>INSCREVA-SE</span>
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Patient;
