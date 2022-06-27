import styles from './styles.module.scss'

import Image from 'next/image'

const Box = (props: any) => {
  return (
    <div className={styles.box}>
      <div className={styles.profile}>
        <Image src={props.profileImage} alt='Profile' />
      </div>
      <div className={styles.name}>
        {props.name}
      </div>
      <div className={styles.position}>
        {props.position}
      </div>
      <div className={styles.clientLogo}>
        <Image src={props.logo} alt='Logo' />
      </div>
    </div>
  )
}

export default Box