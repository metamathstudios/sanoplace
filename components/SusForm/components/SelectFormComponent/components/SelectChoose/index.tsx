import { useState } from 'react'
import styles from './styles.module.scss'

const SelectChoose = () => {
  const [select, setSelect] = useState('no')

  function handleSelectButton (props: any) {
    setSelect(props)
    console.log(select)
  }

  return (
    <div className={styles.container}>
      <div className={styles.yesNoContainer}>
        <div className={styles.yesContainer}>
          Sim
        </div>
        <div className={styles.noContainer}>
          Não
        </div>
      </div>
      <div className={styles.selectContainer}>
        <button className={select === 'yes' ? styles.activeYesButton : styles.disableYesButton} onClick={() => handleSelectButton('yes')}></button>
        <button className={select === 'no' ? styles.activeNoButton : styles.disableNoButton} onClick={() => handleSelectButton('no')}></button>
      </div>
    </div>
  )
}

export default SelectChoose