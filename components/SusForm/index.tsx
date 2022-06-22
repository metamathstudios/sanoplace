import styles from "./styles.module.scss";

import SelectForm from './components/SelectFormComponent/index'

const FarForm = () => {
  return (
    <div className={styles.screenContainer}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          Teste SUS
        </div>
        <div className={styles.subtitleContainer}>
        Este teste têm por objetivo, fazer uma avaliação se você é físicamente dependente, avalia associações de <br />
        comportamentos e dependencia psicológica. Boa sorte.
        </div>
        <div className={styles.selectContainer}>
          <SelectForm />
        </div>
        <div className={styles.nextButtonContainer}>
          <div className={styles.nextButton}>
            Seguinte
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarForm;