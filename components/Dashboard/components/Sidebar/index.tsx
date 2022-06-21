import Image from "next/image";
import styles from "./styles.module.scss";

const Sidebar = (imageName: any) => {
  const styling = {
    backgroundImage: `url(/images/avatar.jpg)`,
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
            <img src="/images/icons/house.svg" alt="House Icon" />
          </div>
          <div className={styles.mail}>
            <div className={styles.notification} />
            <img src="/images/icons/mail.svg" alt="Mail Icon" />
          </div>
          <div className={styles.settings}>
            <img src="/images/icons/settings.svg" alt="Settings Icon" />
          </div>
        </div>
      </div>
      <div className={styles.board}>
        <div className={styles.item}>
          <img src="/images/icons/test.svg" alt="Test Icon" />
          <span>Teste SUS</span>
        </div>
        <div className={styles.item}>
          <img src="/images/icons/test.svg" alt="Test Icon" />
          <span>Teste Fragestrom</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
