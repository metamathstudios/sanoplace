import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

const Navbar = () => {
  const router = useRouter();
  return (
    <aside className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          src="/images/icons/hamburguer.svg"
          alt="Menu"
          width={24}
          height={17}
        />
        <Image
          src="/logo.svg"
          width={176}
          height={27}
          alt="Nicometa Logo"
          className={styles.logo}
          onClick={() => {
            router.push("/");
          }}
        />
      </div>
    </aside>
  );
};

export default Navbar;
