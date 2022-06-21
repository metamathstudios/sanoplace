import Select from "./components/SelectComponent";
import styles from "./styles.module.scss";

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
          <Select text = 'Em quanto tempo depois de acordar você fuma o primeiro cigarro?' />
          <Select text = 'Você acha difícil ficar sem fumar em lugares onde é proibido (por exemplo, na igreja, no cinema, em bibliotecas, e outros.)?' />
          <Select text = 'Qual o cigarro do dia que traz mais satisfação?' />
          <Select text = 'Quantos cigarros você fuma por dia?' />
          <Select text = 'Você fuma mais frequentemente pela manhã?' />
          <Select text = 'Você fuma mesmo doente quando precisa ficar na cama a maior parte do tempo?' />
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