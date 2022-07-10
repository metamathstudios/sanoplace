import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";

interface ComponentType {
  type: string;
}

const Form: React.FC<ComponentType> = (props: ComponentType) => {
  return (
    <div className={styles.container}>
      {props.type === "clientLogin" && (
        <form>
          <div className={styles.item}>
            <div className={styles.icon}>
              <Image
                src="/images/auth/user_light.svg"
                alt="Icon"
                width={15}
                height={15}
              />
            </div>
            <input type="text" placeholder="E-mail" />
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <Image
                src="/images/auth/password.svg"
                alt="Icon"
                width={15}
                height={15}
              />
            </div>
            <input type="password" placeholder="Senha" />
          </div>
          <div className={styles.actions}>
            <div className={styles.left}>
              <span>Esqueceu sua senha?</span>
            </div>
            <div className={styles.right}>
              <div className={styles.button}>Entrar</div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
