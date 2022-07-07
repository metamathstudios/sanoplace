import Image from 'next/image'

import search from './assets/search.svg'

import styles from './styles.module.scss'

const Filter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.searchSpecialist}>
          <div className={styles.title}>
            Pesquise seu Especialista
          </div>
          <div className={styles.searchInput}>
            <div className={styles.inputSvg}>
              <Image src={search} alt='Busque' />
            </div>
            <div className={styles.input}>
              <input type='text' className={styles.inputHtml} placeholder='Por nome especialidade ou motivo' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter