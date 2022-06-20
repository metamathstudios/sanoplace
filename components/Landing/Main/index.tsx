import React from "react";
import styles from "./styles.module.scss";

const Main = () => {
  return (
    <>
      <main className={styles.content}>
        <div className={styles.background}></div>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.columnCotent}>
              <h1>Quer uma vida saudável?</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </p>
              <button>Registrar</button>
            </div>
          </div>
          <div className={styles.right}></div>
        </div>
        <div className={styles.divisor}></div>
      </main>
    </>
  );
};

export default Main;
