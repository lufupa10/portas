import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/jogo.module.css";
import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import PortaModel from "../../../model/porta";

export default function Jogo() {
  const [p1, setP1] = useState(new PortaModel(1));
  const rotasPortas = useRouter();
  const [portas, setPortas] = useState([]);

  useEffect(() => {
    const numeroPortas = +rotasPortas.query.portas;
    const temPresente = +rotasPortas.query.temPresente;
    setPortas(criarPortas(numeroPortas, temPresente));
  }, [rotasPortas.query]);

  function renderizarPortas() {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  }

  return (
    <>
      <div>
        {/* <Presentes /> */}
        <div id={styles.jogo}>
          <div className={styles.porta}>{renderizarPortas()}</div>
          <div className={styles.botoes}>
            <Link href="/">
              <button>Voltar Jogo</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
