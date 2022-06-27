import styles from './styles.module.scss'

import Image from 'next/image'

import diagnostic from './assets/diagnostic.svg'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <div className={styles.leftSide}>
          <div className={styles.title}>
            Tratamento mental
          </div>
          <div className={styles.subTitle}>
            com agilidade tudo em uma só plataforma
          </div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </div>
          <div className={styles.button}>
            Agende uma conversa agora
          </div>
        </div>
        <div className={styles.rightSide} />
      </div>
      {/* <div className={styles.positionContainer}>
        <div className={styles.ctaContainer}>
          <div className={styles.centerContainer}>
             <div className={styles.improveHealth}>
              <Image src={diagnostic} alt='Diagnostic' width={100} />
              <div className={styles.title}>
                Melhore sua saúde
              </div>
              <div className={styles.subTitle}>
                Doutores altamente classificados
              </div>
            </div>
          </div>
        </div>
  </div> */}
    </div>
  )
}

export default Hero