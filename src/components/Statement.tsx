import styles from "../styles/Statement.module.css";

interface StatementProps {
  text: string
  indice?: any
}

export default function Enunciado(props: StatementProps) {
  return (
    <section className={styles.statement}>
      <span className={styles.text}>
        {props.text}
      </span>
    </section>
  )
}