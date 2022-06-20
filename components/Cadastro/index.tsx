import { useEffect, useState } from "react";
import AuthSelection from "./selections/Auth";
import RoleSelection from "./selections/Role";
import styles from "./styles.module.scss";

const Form = () => {
  const [selectionType, setSelectionType] = useState("role");

  useEffect(() => {
    localStorage.setItem("selectionType", selectionType);
  }, [selectionType]);

  return (
    <div className={styles.container}>
      <RoleSelection state={selectionType == "role" ? "flex" : "none"} />
      <AuthSelection state={selectionType == "auth" ? "flex" : "none"} />
    </div>
  );
};

export default Form;
