import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import Doctor from "./types/doctor";
import Patient from "./types/patient";

const Registration = (props: any) => {
  const router = useRouter();

  return (
    <div
      className={styles.container}
      style={
        props.pageType == "registration"
          ? { display: "flex" }
          : { display: "none" }
      }
    >
      <div className={styles.title}>
        <div className={styles.separator}>
          <Image
            src="/images/icons/arrow.svg"
            alt="Arrow"
            width={20}
            height={20}
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              props.setPageType("auth");
              props.setSignUpData({});
            }}
          />
        </div>
        <span>
          Registrando-se como{" "}
          <span className={styles.contrast}>
            {props.signUpData.role === "patient" ? "Paciente" : "Médico"}
          </span>
        </span>
        <div className={styles.separator} />
      </div>
      {props.signUpData.role === "patient" ? <Patient /> : <Doctor />}
      <div className={styles.footer}>
        <Image
          src="/logo.svg"
          width={170}
          height={27}
          alt="Nicometa Logo"
          className={styles.logo}
          onClick={() => {
            router.push("/");
          }}
        />
        <span>
          já tem uma conta?
          <br />
          <span
            style={{
              color: "var(--blue)",
              cursor: "pointer",
              fontWeight: "600",
            }}
            onClick={() => {
              router.push("/login");
            }}
          >
            Conecte-se
          </span>
        </span>
      </div>
    </div>
  );
};

export default Registration;
