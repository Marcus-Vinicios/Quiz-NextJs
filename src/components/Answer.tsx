import ResponseModel from "../models/response"
import styles from "../styles/Answer.module.css"

interface AnswerProps {
  data: ResponseModel
  indice: number
  value: string
  bgColor: string
  respostaFornecida: (indice: number) => void
}

export default function Resposta(props: AnswerProps) {
  const answer = props.data;
  const respostaRevelada = answer.revelada ? styles.respostaRevelada : '';

  return (
    <div onClick={() => { props.respostaFornecida(props.indice) }} className={styles.answer}>
      <div className={`${respostaRevelada} ${styles.content}`}>
        < div className={styles.front}>
          <div className={styles.letra}
            style={{ backgroundColor: props.bgColor }}
          >
            {props.value}
          </div>
          <div className={styles.valor}>
            {answer.valor}
          </div>
        </div>
        <div className={styles.back}>
          {answer.certa
            ?
            (
              <div className={styles.certa}>
                <div>A resposta certa é...</div>
                <div className={styles.valor}>
                  {answer.valor}
                </div>
              </div>
            )
            :
            (
              <div className={styles.errada}>
                <div>A resposta informada está errada...</div>
                <div className={styles.valor}>
                  {answer.valor}
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div >
  )
}