import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import FarForm from "../FagerstromForm";
import SusForm from "../SusForm";
import ResultLayout from "./components/ResultLayout";

import normal from './components/ResultLayout/assets/normal.svg'
import medium from './components/ResultLayout/assets/medium.svg'
import high from './components/ResultLayout/assets/high.svg'

import styles from "./styles.module.scss";
import { useState } from "react";

const Dash = () => {
  const [page, setPage] = useState("sus_test");
  return (
    <div className={styles.container}>
      <Navbar />
      <Sidebar image={"/images/avatar.jpg"} page={page} setPage={setPage} />
      <SusForm page={page} />
      <FarForm page={page} />
      <ResultLayout dependency={normal} textLevel='BAIXA' />
      <ResultLayout dependency={medium} textLevel='MÉDIA' />
      <ResultLayout dependency={high} textLevel='ALTA' />
    </div>
  );
};

export default Dash;
