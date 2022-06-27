import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./styles.module.scss";

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.container}>
      <div className={styles.left}>
        <Image
          src="/logo.svg"
          width={224}
          height={35}
          alt="Nicometa Logo"
          className={styles.logo}
        />

      <div className={styles.userOptions}>
        <div className={styles.optionsContainer}>
          <div className={styles.paraEspecialistas}>Para Especialistas</div> <div className={styles.paraEmpresas}>Para Empresas</div>
        </div>
      </div>
      </div>
      
      <div className={styles.right}>
        <div className={styles.specialists}>
          Buscar Especialistas
        </div>
        <div className={styles.loginButton}>
          Entrar
        </div>
        <div className={styles.createAccountButton}>
          Criar Conta
        </div>
      </div>
    </header>
  );
};

export default Header;
