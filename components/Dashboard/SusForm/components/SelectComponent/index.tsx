import styles from './styles.module.scss'

const SelectComponent = (props: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          {props.text}
        </div>
      </div>
      <div className={styles.line} />
    </div>
  )
}

export default SelectComponent