import styles from "./styles.module.scss";

const AuthSelection = ({ state }) => {
  return (
    <div className={styles.container} style={{ display: state }}>
      AUTH SELECITON
    </div>
  );
};

export default AuthSelection;
