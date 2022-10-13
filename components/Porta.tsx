import styles from "../styles/porta.module.css";
import PortaModel from "../model/porta";
import Presentes from "./Presentes";

interface PortaProps {
  value: PortaModel;
  onChange: (novaPorta: PortaModel) => void;
}

export default function Porta(props: PortaProps) {
  const porta = props.value;

  const alternarSelecao = (e) => props.onChange(porta.alteraSelecionada());

  const selecionado = porta.selecionada ? styles.selecionada : "";

  const abrir = (e) => {
    e.stopPropagation();
    props.onChange(porta.abrir());
  };

  function renderizarPorta() {
    return (
      <div className={styles.porta}>
        <div className={styles.numero}>{porta.numero}</div>
        <div onClick={abrir} className={styles.macaneta}></div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.area} onClick={alternarSelecao}>
        <div className={`${styles.estrutura} ${selecionado}`}>
          {porta.fechada ? (
            renderizarPorta()
          ) : porta.temPresente ? (
            <Presentes />
          ) : (
            false
          )}
        </div>
        <div className={styles.chao}></div>
      </div>
    </>
  );
}
