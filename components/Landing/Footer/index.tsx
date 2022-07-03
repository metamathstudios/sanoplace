import styles from './styles.module.scss'

import Image from 'next/image'

import logo from '../../../public/images/landing/logo.svg'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerHeader}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt='Logo' width={200} />
        </div>
        <div className={styles.line}/>
      </div>
      <div className={styles.footerMain}>
        <div className={styles.column}>
          <div className={styles.title}>
            Home
          </div>
          <div className={styles.content}>
            <div>Para Pacientes</div>
            <div>Para Especialistas</div>
            <div>Para Empresas</div>
            <div>Busque Especialistas</div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.title}>
            Home
          </div>
          <div className={styles.content}>
            <div>Para Pacientes</div>
            <div>Para Especialistas</div>
            <div>Para Empresas</div>
            <div>Busque Especialistas</div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.title}>
            Home
          </div>
          <div className={styles.content}>
            <div>Para Pacientes</div>
            <div>Para Especialistas</div>
            <div>Para Empresas</div>
            <div>Busque Especialistas</div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.title}>
            Home
          </div>
          <div className={styles.content}>
            <div>Para Pacientes</div>
            <div>Para Especialistas</div>
            <div>Para Empresas</div>
            <div>Busque Especialistas</div>
          </div>
        </div>
      </div>
      <div className={styles.line}/>
      <div className={styles.footerEnd}>
        <div className={styles.text}>
          SanoPlace - CNPJ: 00.000.000/0000-00 - em breve<br />
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an <br />
          unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic <br />
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently <br />
          with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div className={styles.info}>
          <div>@2022 SanoPlace</div>
          <div>Termos de Serviço</div>
          <div>Política de Privacidade</div>
        </div>
      </div>
    </div>
  )
}

export default Footer