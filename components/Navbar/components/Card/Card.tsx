import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";

interface CardType {
  position: string;
  description: string;
  cardImage: string;
}

const Card = (props: CardType) => {
  const router = useRouter();
  return (
    <div
      className={styles.container}
      onClick={() => router.push("/auth/" + props.position.toLowerCase())}
    >
      <div className={styles.cardImage}>
        <Image src={props.cardImage} alt="Account" />
      </div>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.position}>{props.position}</div>
    </div>
  );
};

export default Card;
