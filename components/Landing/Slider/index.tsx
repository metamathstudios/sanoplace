import styles from './styles.module.scss'

const Slider = () => {
    return (
        <div className={styles.container}>
            <div className={styles.slider}>
                <div className={styles.caseImage}></div>
                <div className={styles.textBox}><div className={styles.title}>Title</div></div>
            </div>
        </div>
    )
}

export default Slider;