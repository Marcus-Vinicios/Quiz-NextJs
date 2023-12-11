import { useRouter } from "next/router"
import styles from "../styles/Result.module.css";
import Estatisticas from "../components/Estatisticas";
import Botao from "../components/Button";

export default function Resultado() {
  const router = useRouter();

  const total = +router.query.total;
  const certas = +router.query.certas;
  const percentual = Math.round((certas / total) * 100);

  return (
    <div className={styles.resultado}>
      <h1>Resultado</h1>
      <div style={{
        display: "flex",
        gap: 10,
      }}>
        <Estatisticas
          text="Perguntas"
          valor={total}
        />
        <Estatisticas
          text="Acertos"
          valor={certas}
          bgColor="#6cf580"
        />
        <Estatisticas
          text="Percentual"
          valor={`${percentual}%`}
          bgColor="#7779f7"
        />
      </div>
      <Botao href="/" text="Tentar Novamente" />
    </div>
  )
}