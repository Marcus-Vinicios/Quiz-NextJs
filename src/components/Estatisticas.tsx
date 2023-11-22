import styles from "../styles/Estatisticas.module.css";

interface EstatisticasProps {
  valor: any
  text: string
  bgColor?: string
  fontColor?: string
}

export default function Estatisticas(props: EstatisticasProps) {
  return (
    <div className={styles.estatistica}>
      <div
        className={styles.valor}
        style={{
          backgroundColor: props.bgColor ?? "#f2d850",
          color: props.fontColor ?? "#333"
        }}
      >
        {props.valor}
      </div>
      <div className={styles.text}>
        {props.text}
      </div>
    </div>
  )
}