import Image from "next/image";
import Item from "./Item";
import styles from "./styles.module.scss";

const Sidebar = (props: any) => {
  const styling = {
    backgroundImage: `url(${props.image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <aside className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.avatar} style={styling} />
        <h1 className={styles.name}>Mauricio Palamet</h1>
        <span className={styles.role}>Paciente</span>
        <div className={styles.menu}>
          <div className={styles.house}>
            <Image
              src="/images/icons/house.svg"
              alt="House Icon"
              width={30}
              height={30}
            />
          </div>
          <div className={styles.mail}>
            <div className={styles.notification} />
            <Image
              src="/images/icons/mail.svg"
              alt="Mail Icon"
              width={30}
              height={30}
            />
          </div>
          <div className={styles.settings}>
            <Image
              src="/images/icons/settings.svg"
              alt="Settings Icon"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
      <div className={styles.board}>
        <Item
          id="sus_test"
          label="Teste SUS"
          icon="test"
          page={props.page}
          setPage={props.setPage}
        />

        <Item
          id="fagerstrom_test"
          label="Teste Fagerström"
          icon="test"
          page={props.page}
          setPage={props.setPage}
        />

        <Item
          id="Registration_and_finance"
          label="Cadastramento e Finanças"
          icon="finance"
          page={props.page}
          setPage={props.setPage}
        />

        <Item
          id="tobacco_registration"
          label="Registro de fumo"
          icon="list"
          page={props.page}
          setPage={props.setPage}
        />

        <Item
          id="technical_parameters"
          label="Parâmetros técnicos"
          icon="parameters"
          page={props.page}
          setPage={props.setPage}
        />

        <Item
          id="initial_stats"
          label="Estatísticas inicial"
          icon="statistics"
          page={props.page}
          setPage={props.setPage}
        />

        <Item
          id="start_parameters_treat"
          label="Parametros Inic Tratam"
          icon="tratam"
          page={props.page}
          setPage={props.setPage}
        />

        <Item
          id="comparative_analysis"
          label="Análise Comparativa"
          icon="graph"
          page={props.page}
          setPage={props.setPage}
        />

        <Item
          id="score_analysis"
          label="Análise de Pontuação"
          icon="graph"
          page={props.page}
          setPage={props.setPage}
        />

        <Item
          id="graph"
          label="Gráfico"
          icon="graph2"
          page={props.page}
          setPage={props.setPage}
        />

        <Item
          id="phrases"
          label="Frases de efeito"
          icon="phrases"
          page={props.page}
          setPage={props.setPage}
        />

        <Item
          id="diary"
          label="Diário de Bordo"
          icon="diary"
          page={props.page}
          setPage={props.setPage}
        />

        <Item
          id="pulmonary_capacity"
          label="Capacidade pulmonar"
          icon="capacity"
          page={props.page}
          setPage={props.setPage}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
