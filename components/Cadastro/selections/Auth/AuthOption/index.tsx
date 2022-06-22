import Image from "next/image";
import styles from "./styles.module.scss";

const AuthOption = (props: any) => {
  return (
    <div className={styles.container}>
      <Image
        src={`/images/Cadastro/${props.label}.svg`}
        alt={`${props.label}`}
        width={20}
        height={20}
      />
      <span>Continuar com {props.label}</span>
    </div>
  );
};

export default AuthOption;
