import { useState } from "react";
import styles from "../styles/formulario.module.css";
import Cartao from "../components/Cartao";
import Link from "next/link";
import PortaModel from "../model/porta";
import EntradaNumerica from "../components/EntradaNumerica";

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3);
  const [comPresente, setComPresente] = useState(1);
  return (
    <>
      <div className={styles.formulario}>
        <div>
          <Cartao bgColor="#c0392c">
            <h1>Monty Hall</h1>
          </Cartao>
          <Cartao>
            <EntradaNumerica
              text="Qtde de Portas"
              value={qtdePortas}
              onChange={(novaQtde) => setQtdePortas(novaQtde)}
            />
          </Cartao>
        </div>

        <div>
          <Cartao>
            <EntradaNumerica
              text="Porta com presente"
              value={comPresente}
              onChange={(novoPresente) => setComPresente(novoPresente)}
            />
          </Cartao>
          <Cartao bgColor="#32f1b8">
            <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
              <h2 className={styles.link}>Inicio</h2>
            </Link>
          </Cartao>
        </div>
      </div>
    </>
  );
}
