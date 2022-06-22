import styles from './styles.module.scss'

import TextSelectComponent from './components/TextSelectComponent'
import SelectRadix from './components/SelectRadixComponent'

const SelectForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <TextSelectComponent text='Em quanto tempo depois de acordar você fuma o primeiro cigarro?' />
        </div>
        <div className={styles.selectContainer}>
          <SelectRadix defaultValue='select' ariaLabel='time' divLabel='Minutos' value1='select' textValue1='Selecione' value2='between5min' textValue2='Entre 5 minutos' value3='6and30' textValue3='Entre 6 e 30 minutos' value4='31and60' textValue4='Entre 31 e 60 minutos' value5='after60' textValue5='Após 60 minutos' />
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <TextSelectComponent text='Você acha difícil ficar sem fumar em lugares onde é proibido (por exemplo, na igreja, no cinema, em bibliotecas, e outros.)?' />
        </div>
        <div className={styles.selectContainer}>
          <SelectRadix defaultValue='select' ariaLabel='yesNo' divLabel='Escolha' value1='select' textValue1='Selecione' value2='yes' textValue2='Sim' value3='no' textValue3='Não' />
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <TextSelectComponent text='Qual o cigarro do dia que traz mais satisfação?' />
        </div>
        <div className={styles.selectContainer}>
          <SelectRadix defaultValue='select' ariaLabel='choose' divLabel='Escolha' value1='select' textValue1='Selecione' value2='first' textValue2='O primeiro da manhã' value3='others' textValue3='Outros' />
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <TextSelectComponent text='Quantos cigarros você fuma por dia?' />
        </div>
        <div className={styles.selectContainer}>
          <SelectRadix defaultValue='select' ariaLabel='quantity' divLabel='Escolha' value1='select' textValue1='Selecione' value2='less10' textValue2='Menos de 10' value3='11to20' textValue3='De 11 a 20' value4='21to30' textValue4='De 21 a 30' value5='more31' textValue5='Mais de 31' />
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <TextSelectComponent text='Você fuma mais frequentemente pela manhã?' />
        </div>
        <div className={styles.selectContainer}>
          <SelectRadix defaultValue='select' ariaLabel='yesNoMorning' divLabel='Escolha' value1='select' textValue1='Selecione' value2='yesMorning' textValue2='Sim' value3='noMorning' textValue3='Não' />
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <TextSelectComponent text='Você fuma mesmo doente quando precisa ficar na cama a maior parte do tempo?' />
        </div>
        <div className={styles.selectContainer}>
          <SelectRadix defaultValue='select' ariaLabel='yesNoBed' divLabel='Escolha' value1='select' textValue1='Selecione' value2='yesBed' textValue2='Sim' value3='noBed' textValue3='Não' />
        </div>
      </div>

      <div className={styles.line} />
    </div>
  )
}

export default SelectForm