import { useState } from 'react'

import styles from './styles.module.scss'

const FAQ = () => {

  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)
  const [open5, setOpen5] = useState(false)
  const [open6, setOpen6] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.titleContainer}>
          Perguntas Frequentes
        </div>
        <div className={styles.boxesContainer}>
          <div className={open1 === true ? styles.openBox : styles.box} onClick={() => setOpen1(!open1)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </div>
          { open1 === true ? 
            <div className={styles.openQuestion} onClick={() => setOpen1(!open1)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sit. Provident facilis tempore eum commodi odio accusamus pariatur! Corrupti inventore labore ducimus eligendi rerum necessitatibus blanditiis recusandae natus eos porro.
            </div>
          : null}

          <div className={open2 === true ? styles.openBox : styles.box} onClick={() => setOpen2(!open2)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </div>
          { open2 === true ? 
            <div className={styles.openQuestion} onClick={() => setOpen2(!open2)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sit. Provident facilis tempore eum commodi odio accusamus pariatur! Corrupti inventore labore ducimus eligendi rerum necessitatibus blanditiis recusandae natus eos porro.
            </div>
          : null}

          <div className={open3 === true ? styles.openBox : styles.box} onClick={() => setOpen3(!open3)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </div>
          { open3 === true ? 
            <div className={styles.openQuestion} onClick={() => setOpen3(!open3)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sit. Provident facilis tempore eum commodi odio accusamus pariatur! Corrupti inventore labore ducimus eligendi rerum necessitatibus blanditiis recusandae natus eos porro.
            </div>
          : null}

          <div className={open4 === true ? styles.openBox : styles.box} onClick={() => setOpen4(!open4)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </div>
          { open4 === true ? 
            <div className={styles.openQuestion} onClick={() => setOpen4(!open4)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sit. Provident facilis tempore eum commodi odio accusamus pariatur! Corrupti inventore labore ducimus eligendi rerum necessitatibus blanditiis recusandae natus eos porro.
            </div>
          : null}

        <div className={open5 === true ? styles.openBox : styles.box} onClick={() => setOpen5(!open5)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </div>
          { open5 === true ? 
            <div className={styles.openQuestion} onClick={() => setOpen5(!open5)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sit. Provident facilis tempore eum commodi odio accusamus pariatur! Corrupti inventore labore ducimus eligendi rerum necessitatibus blanditiis recusandae natus eos porro.
            </div>
          : null}

          <div className={open6 === true ? styles.openBox : styles.box} onClick={() => setOpen6(!open6)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </div>
          { open6 === true ? 
            <div className={styles.openQuestion} onClick={() => setOpen6(!open6)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sit. Provident facilis tempore eum commodi odio accusamus pariatur! Corrupti inventore labore ducimus eligendi rerum necessitatibus blanditiis recusandae natus eos porro.
            </div>
          : null}
        </div>
      </div>
    </div>
  )
}

export default FAQ