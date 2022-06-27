import styles from './styles.module.scss'

const Stats = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lineContainer}>
        <div className={styles.line} />
      </div>
      <div className={styles.subTitle}>
        Para que eseprar?
      </div>
      <div className={styles.title}>
        uma das melhores plataformas
      </div>
      <div className={styles.subTitle}>
        Nossos números não param de crescer!
      </div>
      <div className={styles.centerContainer}>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <div className={styles.number}>
              80%
            </div>
            <div className={styles.boxSubTitle}>
              Escolhem NicoMeta
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.number}>
              +100
            </div>
            <div className={styles.boxSubTitle}>
              Especialistas
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.number}>
              97%
            </div>
            <div className={styles.boxSubTitle}>
              Mudaram de Vida
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.number}>
              +700
            </div>
            <div className={styles.boxSubTitle}>
              Clientes Ativos
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats