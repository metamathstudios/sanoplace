import Image from "next/image";
import styles from "./styles.module.scss";

const Item = (props: any) => {
  return (
    <div
      className={styles.item}
      style={
        props.page == props.id
          ? { backgroundColor: "white" }
          : { backgroundColor: "transparent" }
      }
      onClick={() => props.setPage(props.id)}
    >
      <div className={styles.itemContent}>
        <div className={styles.icon}>
          <Image
            src={`/images/icons/${props.icon}.svg`}
            alt="Icon"
            style={
              props.page == props.id
                ? {
                    filter:
                      "invert(31%) sepia(13%) saturate(1434%) hue-rotate(54deg) brightness(96%) contrast(93%)",
                  }
                : { filter: "none" }
            }
            width={30}
            height={30}
          />
        </div>
        <div className={styles.title}>
          <span
            style={
              props.page == props.id
                ? { color: "var(--green)" }
                : { color: "var(--white)" }
            }
          >
            {props.label}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Item;
