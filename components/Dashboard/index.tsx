import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import FarForm from "../FagerstromForm";
import SusForm from "../SusForm";
import ResultLayout from "./components/ResultLayout";

import styles from "./styles.module.scss";

const Dash = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Sidebar Image={"avatar.jpg"} />
      <FarForm />
      <SusForm />
      <ResultLayout />
    </div>
  );
};

export default Dash;
