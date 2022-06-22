/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

const Form = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <img
          src="/logo.svg"
          alt="Nicometa Logo"
          className={styles.logo}
          onClick={() => {
            router.push("/");
          }}
        />
        <div className={styles.input}>
          <div className={styles.inputIcon}>
            <Image
              src="/images/icons/user.svg"
              width={14}
              height={14}
              alt="User Icon"
            />
          </div>
          <input type="text" placeholder="E-mail" />
        </div>
        <div className={styles.input} style={{ marginTop: "20px" }}>
          <div className={styles.inputIcon}>
            <Image
              src="/images/icons/password.svg"
              width={14}
              height={14}
              alt="User Icon"
            />
          </div>
          <input type="text" placeholder="Senha" />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.formExtra}>
            <span>Esqueceu a senha?</span>
            <div
              className={styles.button}
              onClick={() => {
                router.push("/dashboard");
              }}
            >
              Entrar
            </div>
          </div>
          <div className={styles.divisorContainer}>
            <div className={styles.divisor} />
          </div>
          <div className={styles.formCreateAccount}>
            Ainda não se cadastrou?
            <span
              onClick={() => {
                router.push("/cadastro");
              }}
            >
              &nbsp;Cadastre-se agora
            </span>
          </div>
        </div>
      </form>
      <div className={styles.wave}>
        <img src="/images/Cadastro/waves.svg" alt="waves" />
      </div>
    </div>
  );
};

export default Form;
