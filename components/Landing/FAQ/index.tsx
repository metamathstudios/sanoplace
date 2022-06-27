import styles from './styles.module.scss'

const FAQ = () => {
  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.titleContainer}>
          Perguntas Frequentes
        </div>
        <div className={styles.boxesContainer}>
          <div className={styles.box}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </div>
          <div className={styles.box}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </div>
          <div className={styles.box}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </div>
          <div className={styles.box}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </div>
          <div className={styles.box}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </div>
          <div className={styles.box}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ