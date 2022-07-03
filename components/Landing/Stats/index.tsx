import { useState } from 'react'
import styles from './styles.module.scss'

import CountUp from 'react-countup';

const Stats = () => {
  const [valueTotal] = useState(80)
  const [value2Total] = useState(100)
  const [value3Total] = useState(97)
  const [value4Total] = useState(700)

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
      <div className={styles.centerContainer} >
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <div className={styles.number}>
              <CountUp start={0} end={valueTotal} duration={2} suffix='+' enableScrollSpy={true}/>
            </div>
            <div className={styles.boxSubTitle}>
              Escolhem SanoPlace
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.number}>
              <CountUp start={0} end={value2Total} duration={2.3} prefix='+' enableScrollSpy={true}/>
            </div>
            <div className={styles.boxSubTitle}>
              Especialistas
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.number}>
            <CountUp start={0} end={value3Total} duration={2.6} suffix='%' enableScrollSpy={true}/>
            </div>
            <div className={styles.boxSubTitle}>
              Mudaram de Vida
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.number}>
              {<CountUp start={0} end={value4Total} duration={3} suffix='+' enableScrollSpy={true}/>}
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