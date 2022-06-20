import Image from "next/image";
import React from "react";

import styles from "./styles.module.scss";

const Soluctions = () => {
  return (
    <section className={styles.content}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <h1>Nossas soluções</h1>
          <div className={styles.row}>
            <div className={styles.boxContainer}>
              <div className={styles.card}>
                <Image
                  src="/images/landing/card_image_01.svg"
                  alt="Card Image"
                  width={200}
                  height={200}
                />
              </div>
              <h2>Melhorar sua saúde</h2>
            </div>
            <div className={styles.boxContainer}>
              <div className={styles.card}>
                <Image
                  src="/images/landing/card_image_02.svg"
                  alt="Card Image"
                  width={200}
                  height={200}
                />
              </div>
              <h2>Atendimento rápido</h2>
            </div>
            <div className={styles.boxContainer}>
              <div className={styles.card}>
                <Image
                  src="/images/landing/card_image_03.svg"
                  alt="Card Image"
                  width={200}
                  height={200}
                />
              </div>
              <h2>Fácil acesso</h2>
            </div>
            <div className={styles.boxContainer}>
              <div className={styles.card}>
                <Image
                  src="/images/landing/card_image_04.svg"
                  alt="Card Image"
                  width={200}
                  height={200}
                />
              </div>
              <h2>Comprovado por médicos</h2>
            </div>
          </div>
        </div>
        <div className={styles.message}></div>
      </div>
    </section>
  );
};

export default Soluctions;
