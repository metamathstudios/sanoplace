import styles from './styles.module.scss'

import TextSelectComponent from './components/TextSelectComponent'
import SelectChoose from './components/SelectChoose'

const SelectForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <TextSelectComponent text='É muito dificil para você ficar 12 horas sem fumar?' />
        </div>
        <div className={styles.selectContainer}>
          <SelectChoose />
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <TextSelectComponent text='Você tem um desejo intenso e compulsivo (fissura) por cigarros?' />
        </div>
        <div className={styles.selectContainer}>
          <SelectChoose />
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <TextSelectComponent text='Você sente necessidade de fumar pelo menos um certo número de cigarros por dia?' />
        </div>
        <div className={styles.selectContainer}>
          <SelectChoose />
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <TextSelectComponent text='Você frequentemente se encontra fumando sem ter percebido que havia acendido um cigarro?' />
        </div>
        <div className={styles.selectContainer}>
          <SelectChoose />
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <TextSelectComponent text='Você associa o ato de fumar com outros comportamentos tais como tomar café ou falar ao telefone?' />
        </div>
        <div className={styles.selectContainer}>
          <SelectChoose />
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <TextSelectComponent text='Causará ansiedade, por acaso, ficar um dia inteiro sem fumar?' />
        </div>
        <div className={styles.selectContainer}>
          <SelectChoose />
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <TextSelectComponent text='Causará ansiedade, por acaso, ficar um dia inteiro sem fumar?' />
        </div>
        <div className={styles.selectContainer}>
          <SelectChoose />
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <TextSelectComponent text='Fumar é um dos prazeres mais importantes da sua vida?' />
        </div>
        <div className={styles.selectContainer}>
          <SelectChoose />
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <TextSelectComponent text='O pensamento de nunca mais fumar o torna infeliz?' />
        </div>
        <div className={styles.selectContainer}>
          <SelectChoose />
        </div>
      </div>

      <div className={styles.line} />
    </div>
  )
}

export default SelectForm