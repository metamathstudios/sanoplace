import styles from "./styles.module.scss";

const Patient = () => {
  return (
    <div>
      <div className={styles.item}>
        <label>Nome</label>
        <input type="text" />
      </div>
      <div className={styles.item}>
        <label>E-mail</label>
        <input type="text" />
      </div>
      <div className={styles.double}>
        <div className={styles.selfItem}>
          <label>Senha</label>
          <input type="text" />
        </div>
        <div className={styles.selfItem}>
          <label>Confirmar senha</label>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Patient;
