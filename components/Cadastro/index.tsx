import Image from "next/image";
import { useEffect, useState } from "react";
import AuthSelection from "./selections/Auth";
import Registration from "./selections/Registration";
import RoleSelection from "./selections/Role";
import styles from "./styles.module.scss";

const Form = () => {
  const [pageType, setPageType] = useState("role");
  const [signUpData, setSignUpData] = useState({});

  return (
    <div className={styles.container}>
      <RoleSelection
        pageType={pageType}
        setPageType={setPageType}
        setSignUpData={setSignUpData}
      />
      <AuthSelection
        pageType={pageType}
        signUpData={signUpData}
        setPageType={setPageType}
        setSignUpData={setSignUpData}
      />
      <Registration
        pageType={pageType}
        signUpData={signUpData}
        setPageType={setPageType}
        setSignUpData={setSignUpData}
      />
      <div className={styles.wave}>
        <img src="/images/Cadastro/waves.svg" alt="waves" />
      </div>
    </div>
  );
};

export default Form;
