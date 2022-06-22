import Select from "./components/SelectComponent";
import styles from "./styles.module.scss";

const SusForm = (props: any) => {
  return (
    <div
      className={styles.screenContainer}
      style={
        props.page == "sus_test" ? { display: "block" } : { display: "none" }
      }
    >
      <div className={styles.container}>
        <div className={styles.titleContainer}>Teste SUS</div>
        <div className={styles.subtitleContainer}>
          Este teste têm por objetivo, fazer uma avaliação se você é físicamente
          dependente, avalia associações de <br />
          comportamentos e dependencia psicológica. Boa sorte.
        </div>
        <div className={styles.selectContainer}>
          <Select text="É muito dificil para você ficar 12 horas sem fumar?" />
          <Select text="Você tem um desejo intenso e compulsivo (fissura) por cigarros?" />
          <Select text="Você sente necessidade de fumar pelo menos um certo número de cigarros por dia?" />
          <Select text="Você frequentemente se encontra fumando sem ter percebido que havia acendido um cigarro?" />
          <Select text="Você associa o ato de fumar com outros comportamentos tais como tomar café ou falar ao telefone?" />
          <Select text="Causará ansiedade, por acaso, ficar um dia inteiro sem fumar?" />
          <Select text="Causará ansiedade, por acaso, ficar um dia inteiro sem fumar?" />
          <Select text="Você fuma mais depois de ter uma discussão com alguém?" />
          <Select text="Fumar é um dos prazeres mais importantes da sua vida?" />
          <Select text="O pensamento de nunca mais fumar o torna infeliz?" />
        </div>
        <div className={styles.nextButtonContainer}>
          <div className={styles.nextButton}>Seguinte</div>
        </div>
      </div>
    </div>
  );
};

export default SusForm;
