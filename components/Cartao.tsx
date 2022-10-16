import styles from "../styles/cartao.module.css";

export default function Cartao(props) {
  return (
    <>
      <div
        className={styles.cartao}
        style={{ backgroundColor: props.bgColor ?? "#ffff" }}
      >
        {props.children}
      </div>
    </>
  );
}
