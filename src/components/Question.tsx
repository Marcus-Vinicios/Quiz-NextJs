import QuestionModel from "../models/question";
import questions from "../pages/api/QuestionsDatabase";

import styles from "../styles/Question.module.css";
import Resposta from "./Answer";
import Enunciado from "./Statement";
import Temporizador from "./Timer";

const letras = ["A", "B", "C", "D"]

interface QuestionProps {
  valor: QuestionModel
  tempoPraResposta?: number
  respostaFornecida: (indice: number) => void
  tempoEsgotado: () => void
}

export default function Questao(props: QuestionProps) {
  const question = props.valor;

  function renderAnswers() {
    return question.respostas.map((answer, i) => {
      return <Resposta
        key={`${question.id}-${i}`}
        data={answer}
        indice={i}
        value={letras[i]}
        bgColor={"#f2c866"}
        respostaFornecida={props.respostaFornecida}
      />
    })
  }

  return (
    <div className={styles.question}>
      <Enunciado text={question.enunciado} />
      <Temporizador
        key={question.id}
        duracao={props.tempoPraResposta ?? 10}
        tempoEsgotado={props.tempoEsgotado}
      />
      {renderAnswers()}
    </div>
  )
}