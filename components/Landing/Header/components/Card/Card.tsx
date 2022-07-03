import Image from 'next/image'

import styles from './styles.module.scss'

const Card = (props: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardImage}>
        <Image src={props.cardImage} alt='Account'/>
      </div>
      <div className={styles.description}>
        {props.description}
      </div>
      <div className={styles.position}>
        {props.position}
      </div>
    </div>
  )
}

export default Card