import { useState } from 'react'
import Image from 'next/image';
import CountUp from 'react-countup';

import styles from './styles.module.scss'

import diagnostic from './assets/diagnostic.svg'
import calendar from './assets/calendar.svg'

const Stats = () => {
  const [valueTotal] = useState(80)
  const [value2Total] = useState(100)
  const [value3Total] = useState(97)
  const [value4Total] = useState(700)

  return (
    <>
    <div className={styles.afterDivContainer}>
      <div className={styles.afterDiv}>
        <div className={styles.centerColumn}>
          <div className={styles.firstRow}>
            <div className={styles.diagnosticImage}>
              <Image src={diagnostic} alt='Melhore sua Saúde' />
            </div>
            <div className={styles.columnContainer}>
              <div className={styles.title}>
                Melhore sua saúde
              </div>
              <div className={styles.subtitle}>
                Doutores altamente classificados.
              </div>
            </div>
            <div className={styles.line} />
            <div className={styles.firstRow}>
              <div className={styles.diagnosticImage}>
                <Image src={calendar} alt='Melhore sua Saúde' />
              </div>
              <div className={styles.columnContainer}>
                <div className={styles.title}>
                  Agendamento em instantes
                </div>
                <div className={styles.subtitle}>
                  Plataforma com a melhor qualidade.
                </div>
              </div>
            </div>
            <div className={styles.button}>
              Fale com um Especialista
            </div>
          </div>
        </div>
      </div>
    </div>
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
    </>
  )
}

export default Stats