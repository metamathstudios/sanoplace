import styles from './styles.module.scss'

import Image from 'next/image'

import layout from './assets/layout.svg'

const Apresentation2 = () => {
  return(
    <div className={styles.container}>
      <div className={styles.centerContainer}>
        <div className={styles.leftSide}>
          <Image src={layout} alt='Phone' width={600} />
        </div>
        <div className={styles.rightSide}>
          <div className={styles.title}>
            What is Lorem Ipsum?
          </div>
          <div className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apresentation2