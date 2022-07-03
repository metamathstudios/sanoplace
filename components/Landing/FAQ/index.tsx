import { useState } from 'react'

import styles from './styles.module.scss'

const FAQ = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.titleContainer}>
          Perguntas Frequentes
        </div>
        <div className={styles.boxesContainer}>
          <div className={styles.box} onClick={() => setOpen(true)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ