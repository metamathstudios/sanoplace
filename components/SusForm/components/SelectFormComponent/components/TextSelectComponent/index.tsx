import styles from './styles.module.scss'

const TextSelectComponent = (props: any) => {
  return (
    <div className={styles.container}>
      {props.text}
    </div>
  )
}

export default TextSelectComponent