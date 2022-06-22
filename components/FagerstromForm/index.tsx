import styles from "./styles.module.scss";

import SelectForm from './components/SelectFormComponent/index'

const FarForm = () => {
  return (
    <div className={styles.screenContainer}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          Teste de Fagerström
        </div>
        <div className={styles.subtitleContainer}>
        O Teste de Fagerström mede o grau de dependência à nicotina. Todo paciente deve ter aferido o seu grau de <br />
        dependência à nicotina, considerando que é essa dependência que dificulta o processo de abstinência, pois <br />
        causa sintomas desconfortáveis nas pessoas que tentam parar de fumar, e aumenta as chances de as pessoas <br />
        voltarem a fumar.
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