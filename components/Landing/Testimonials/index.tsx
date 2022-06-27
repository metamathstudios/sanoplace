import styles from './styles.module.scss'

import Box from './components/Box/index'

import image1 from './assets/profiles/image1.svg'
import image2 from './assets/profiles/image2.svg'
import image3 from './assets/profiles/image3.svg'
import image4 from './assets/profiles/image4.svg'

import logo1 from './assets/logos/logo1.svg'
import logo2 from './assets/logos/logo2.svg'
import logo3 from './assets/logos/logo3.svg'
import logo4 from './assets/logos/logo4.svg'

const Testimonials = (props: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.headerText}>
          <div className={styles.title}>
            depoimento
          </div>
          <div className={styles.secondTitle}>
            O que dizem
          </div>
          <div className={styles.description}>
            Depoimento de clientes reais que tiveram <br />
            processos bem sucedidos por meio das <br />
            soluções da nicometa.
          </div>
        </div>
        <div className={styles.boxesContainer}>
          <Box profileImage={image1} name='Helena Soares' position='Oftamologista' logo={logo1} />
          <Box profileImage={image2} name='Jonadabe Santos' position='Designer' logo={logo2} />
          <Box profileImage={image3} name='Thomas Nelby' position='Gerente de Apostas' logo={logo3} />
          <Box profileImage={image4} name='Ana Maria' position='Professora' logo={logo4} />
        </div>
      </div>
    </div>
  )
}

export default Testimonials