import { useRouter } from "next/router"
import { useState } from "react"

import Image from "next/image"

import close from './assets/close.svg'
import person from './assets/person.svg'
import specialist from './assets/specialist.svg'
import business from './assets/business.svg'
import mobileMenuSVG from './assets/mobileMenu.svg'

import styles from "./styles.module.scss"
import Card from "./components/Card/Card"

const Header = () => {
  const router = useRouter();

  const [accountModal, setAccountModal] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <header className={styles.container}>
      <div className={styles.left}>
        <div className={styles.mobileMenu} onClick={() => setMobileMenu(!mobileMenu)}>
          <Image src={mobileMenuSVG} alt='Menu' />
        </div>
        { mobileMenu === true ?
        <div className={styles.mobileMenuContainer}>
          <div className={styles.contentContainer}>
            <div className={styles.menuOptionsContainer}>
              <div className={styles.specialists}>
                Para Especialistas
              </div>
              <div className={styles.business}>
                Para Empresas
              </div>
              <div className={styles.searchSpecialists}>
                Busque Especialistas
              </div>
              <div className={styles.menuLoginButton}>
                Entrar
              </div>
              <div className={styles.signUpButton}>
                Crie Sua Conta
              </div>
              <div className={styles.rowLegalContainer}>
                <div className={styles.politics}>
                  Política de Privacidade
                </div>
                <div className={styles.serviceTerms}>
                  Termos de Serviço
                </div>
              </div>
              <div className={styles.menuFooter}>
                © 2022 SanoPlace 
              </div>
            </div>
          </div>
        </div> : null}
        <div className={styles.logo}>
          <Image
            src="/logo.svg"
            width={184}
            height={35}
            layout="fixed"
            alt="Nicometa Logo"
          />
        </div>

      <div className={styles.userOptions}>
        <div className={styles.optionsContainer}>
          <div className={styles.paraEspecialistas}>Para Especialistas</div> <div className={styles.paraEmpresas}>Para Empresas</div>
        </div>
      </div>
      </div>
      
      <div className={styles.right}>
        <div className={styles.specialists}>
          Buscar Especialistas
        </div>
        <div className={styles.loginButton} onClick={() => setAccountModal(true)}>
          Entrar
        </div>
        <div className={styles.createAccountButton} onClick={() => setAccountModal(true)}>
          Criar Conta
        </div>
        { accountModal === false ? null :
        <><div className={styles.modalContainer} onClick={() => setAccountModal(false)} />
          <div className={styles.accountModal}>
            <div className={styles.closeContainer} onClick={() => setAccountModal(false)}>
              <Image src={close} alt='Close' className={styles.closeSvg} />
            </div>
            <div className={styles.modalTitle}>
              Como você quer acessar o SanoPlace?
            </div>
            <div className={styles.cardContainer}>
              <Card cardImage={person} description='Quero efetuar sessão de terapia e ver conteúdo sobre a saudê emocional.' position='Cliente' />
              <Card cardImage={specialist} description='Quero atender meus pacientes onlines, investindo meu tempo para grande sucesso na área.' position='Especialista' />
              <Card cardImage={business} description='Quero promover o bem-estar emocional e a saúde mental dos meus colaboradores.' position='Empresa' />
            </div>
          </div></>
        }
      </div>
    </header>
  )
}

export default Header
