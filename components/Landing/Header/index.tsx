import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./styles.module.scss";

const Header = () => {
  const router = useRouter();
  const [actived, setActived] = useState("home");

  const focusOn = (name: string) => {
    const home = document.getElementById("under_home");
    const solutions = document.getElementById("under_solutions");
    const cases = document.getElementById("under_cases");

    if (home && solutions && cases) {
      switch (name) {
        case "home":
          home.style.opacity = "100%";
          if (actived !== "solutions") {
            solutions.style.opacity = "0%";
          }
          if (actived !== "cases") {
            cases.style.opacity = "0%";
          }
          return;
        case "solutions":
          if (actived !== "home") {
            home.style.opacity = "0%";
          }
          solutions.style.opacity = "100%";
          if (actived !== "cases") {
            cases.style.opacity = "0%";
          }
          return;
        case "cases":
          if (actived !== "home") {
            home.style.opacity = "0%";
          }
          if (actived !== "solutions") {
            solutions.style.opacity = "0%";
          }
          cases.style.opacity = "100%";
          return;
      }
    }
  };

  const focusOff = (name: string) => {
    const home = document.getElementById("under_home");
    const solutions = document.getElementById("under_solutions");
    const cases = document.getElementById("under_cases");

    if (home && solutions && cases) {
      switch (name) {
        case "home":
          if (actived !== "home") {
            home.style.opacity = "0%";
          }
          return;
        case "solutions":
          if (actived !== "solutions") {
            solutions.style.opacity = "0%";
          }
          return;
        case "cases":
          if (actived !== "cases") {
            cases.style.opacity = "0%";
          }
          return;
      }
    }
  };

  return (
    <header className={styles.container}>
      <div className={styles.left}>
        <Image src="/logo.svg" width={224} height={35} alt="Nicometa Logo" />
      </div>
      <div className={styles.middle}>
        <ul>
          <li>
            <a
              onMouseEnter={() => focusOn("home")}
              onMouseLeave={() => focusOff("home")}
              onClick={() => setActived("home")}
              className={styles.home}
            >
              Home
              <div
                className={styles.underscore}
                id="under_home"
                style={{ opacity: actived === "home" ? "100%" : "0%" }}
              />
            </a>
          </li>
          <li>
            <a
              onMouseEnter={() => focusOn("solutions")}
              onMouseLeave={() => focusOff("solutions")}
              onClick={() => setActived("solutions")}
              className={styles.solutions}
            >
              Soluções
              <div
                className={styles.underscore}
                style={{ opacity: actived === "solutions" ? "100%" : "0%" }}
                id="under_solutions"
              />
            </a>
          </li>
          <li>
            <a
              onMouseEnter={() => focusOn("cases")}
              onMouseLeave={() => focusOff("cases")}
              onClick={() => setActived("cases")}
              className={styles.cases}
            >
              Cases
              <div
                className={styles.underscore}
                style={{ opacity: actived === "cases" ? "100%" : "0%" }}
                id="under_cases"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <button
          onClick={() => {
            router.push("/login");
          }}
        >
          Entrar
        </button>
      </div>
    </header>
  );
};

export default Header;
