import React from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import LoginArea from "./LoginArea";
import SliderItem from "./SliderItem";
import styles from "./styles.module.scss";

interface PageType {
  type: string;
}

const Auth: React.FC<PageType> = (props: PageType) => {
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.text}>
              <div className={styles.logo}>
                <img src="/logo_white.svg" alt="Logo" />
              </div>
              <div className={styles.topping}>Agende sua consulta</div>
              <div className={styles.title}>
                <h1>
                  Veja como as nossa soluçoes vão ajudar você em sua saúde.
                </h1>
              </div>
              <div className={styles.description}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </div>
              <div className={styles.list}>
                {/* item */}
                <div className={styles.item}>
                  <div className={styles.icon}>
                    <img src="/images/icons/lighting.svg" alt="Icon" />
                  </div>
                  <div className={styles.label}>
                    Agilidade na hora de consultar seus especialistas
                  </div>
                </div>
                {/* item */}
                <div className={styles.item}>
                  <div className={styles.icon}>
                    <img src="/images/icons/heart.svg" alt="Icon" />
                  </div>
                  <div className={styles.label}>
                    A melhor experiencia para o colaborador
                  </div>
                </div>
                {/* item */}
                <div className={styles.item}>
                  <div className={styles.icon}>
                    <img src="/images/icons/map.svg" alt="Icon" />
                  </div>
                  <div className={styles.label}>
                    Agendamentos e exames de qualquer lugar
                  </div>
                </div>
                {/* item */}
                <div className={styles.item}>
                  <div className={styles.icon}>
                    <img src="/images/icons/list.svg" alt="Icon" />
                  </div>
                  <div className={styles.label}>
                    Gestão ocupacional estratégica
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <LoginArea />
          </div>
        </div>
      </section>
      <footer>
        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.text}>
              <div className={styles.topping}>Nossos clientes</div>
              <div className={styles.title}>
                <h1>Parceiros que escolheram a SanoPlace</h1>
              </div>
              <div className={styles.description}>
                Duis lorem ipsum irure dolor in reprehenderit in voluptate
              </div>
            </div>
          </div>
          <div className={styles.right} />
        </div>
        <div className={styles.sliding}>
          <div className={styles.slider}>
            <Swiper
              modules={[Autoplay]}
              slidesPerView="auto"
              spaceBetween={50}
              loop={true}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                1200: {
                  slidesPerView: 5,
                },
                1000: {
                  slidesPerView: 4,
                },
                800: {
                  slidesPerView: 3,
                },
                590: {
                  slidesPerView: 2,
                },
                200: {
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide>
                <SliderItem image={"barbearia.svg"} />
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem image={"RL.svg"} />
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem image={"company.svg"} />
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem image={"ompv.svg"} />
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem image={"franza.svg"} />
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem image={"barbearia.svg"} />
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem image={"barbearia.svg"} />
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem image={"barbearia.svg"} />
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem image={"barbearia.svg"} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </footer>
      <div className={styles.background} />
    </div>
  );
};

export default Auth;
