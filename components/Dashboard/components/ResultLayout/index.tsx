import Image from 'next/image'

import styles from './styles.module.scss'

const ResultLayout = (props: any) => {
  return (
    <div className={styles.screenContainer}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          Análise
        </div>
        <div className={styles.dependencyContainer}>
          <Image src={props.dependency} alt='dependency' width={250}/>
        </div>
        <div className={styles.textLevel}>
          {props.textLevel}
        </div>
        <div className={styles.nextButtonContainer}>
          <div className={styles.nextButton}>
            Seguinte
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultLayout