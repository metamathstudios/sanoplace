import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

const RoleSelection = (props: any) => {
  const router = useRouter();

  return (
    <div
      className={styles.container}
      style={
        props.pageType == "role" ? { display: "flex" } : { display: "none" }
      }
    >
      <div className={styles.title}>Cadastrar como:</div>
      <div className={styles.options}>
        <div
          className={styles.patient}
          onClick={() => {
            props.setPageType("auth");
            const data = { role: "patient" };
            props.setSignUpData(data);
          }}
        >
          <div className={styles.image}>
            <Image
              src="/images/Cadastro/patient.svg"
              alt="Paciente"
              width={80}
              height={90}
            />
          </div>
          <span>Paciente</span>
        </div>
        <div
          className={styles.doctor}
          onClick={() => {
            props.setPageType("auth");
            const data = { role: "doctor" };
            props.setSignUpData(data);
          }}
        >
          <div className={styles.image}>
            <Image
              src="/images/Cadastro/doctor.svg"
              alt="Paciente"
              width={80}
              height={90}
            />
          </div>
          <span>Médico</span>
        </div>
      </div>
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

export default RoleSelection;
