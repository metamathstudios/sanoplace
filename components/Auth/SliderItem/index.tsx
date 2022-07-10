import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

interface ComponentType {
  image: string;
}

const SliderItem: React.FC<ComponentType> = (props: ComponentType) => {
  return (
    <Link href={`/about/`}>
      <div className={styles.card}>
        <img src={`/images/auth/${props.image}`} alt="Company" />
      </div>
    </Link>
  );
};

export default SliderItem;
