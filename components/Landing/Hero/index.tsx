/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <div className={styles.leftSideContainer}>
          <div className={styles.leftSide}>
            <div className={styles.title}>Tratamento mental</div>
            <div className={styles.subTitle}>
              com agilidade tudo em uma só plataforma
            </div>
            <div className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </div>
            <div className={styles.buttonContainer}>
              <div className={styles.button}>Agende uma conversa agora</div>
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <img src="/images/landing/headWoman.svg" alt="Head" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
