import Image from "next/image";
import styles from "./styles.module.scss";

const RoleSelection = ({ state }) => {
  return (
    <div className={styles.container} style={{ display: state }}>
      <div className={styles.title}></div>
    </div>
  );
};

export default RoleSelection;
