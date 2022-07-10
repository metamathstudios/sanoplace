import Image from "next/image";
import React from "react";
import Form from "./Form";
import styles from "./styles.module.scss";

const LoginArea: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <span>Bem-vindo(a) á</span>
        <img src="/logo.svg" alt="Logo" />
        <span>melhore sua saúde aqui.</span>
      </div>
      <Form type="clientLogin" />
      <div className={styles.divisor}>
        <div className={styles.line} />
        <div className={styles.center}>
          <span>Ou</span>
        </div>
        <div className={styles.line} />
      </div>
      <div className={styles.authOptions}>
        <Image
          src="/images/auth/google.svg"
          alt="Google"
          width={50}
          height={50}
        />
        <Image
          src="/images/auth/facebook.svg"
          alt="Google"
          width={50}
          height={50}
        />
        <Image
          src="/images/auth/apple.svg"
          alt="Google"
          width={50}
          height={50}
        />
      </div>
      <div className={styles.copy}>
        <span>Ainda não faz parte da SanoPlace?</span>
        <span>Comece agora! É grátis.</span>
      </div>
      <div className={styles.createAccountButton}>Crie sua conta</div>
      <div className={styles.footer}>
        <div className={styles.decorated}>Política de Privacidade</div>
        <span>&nbsp;e&nbsp;</span>
        <div className={styles.decorated}>Termos de Serviço</div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.decorated}>@2022</div>
        <span>&nbsp;SanoPlace</span>
      </div>
    </div>
  );
};

export default LoginArea;
