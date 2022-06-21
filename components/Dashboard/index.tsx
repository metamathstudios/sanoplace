import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import FarForm from "../FagerstromForm";
import SusForm from "./SusForm";

import styles from "./styles.module.scss";

const Dash = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Sidebar />
      <FarForm />
      <SusForm />
    </div>
  );
};

export default Dash;
