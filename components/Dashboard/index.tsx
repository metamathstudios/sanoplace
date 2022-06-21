import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import styles from "./styles.module.scss";

const Dash = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Sidebar Image={"avatar.jpg"} />
    </div>
  );
};

export default Dash;
