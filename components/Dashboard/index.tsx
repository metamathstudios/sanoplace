import FarForm from "../FagerstromForm";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import styles from "./styles.module.scss";

const Dash = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Sidebar />
      <FarForm />
    </div>
  );
};

export default Dash;
