import QuestionModel from "../models/question"
import styles from "../styles/Quiz.module.css"
import Botao from "./Button"
import Questao from "./Question"

interface QuizProps {
  question: QuestionModel
  lastQuest?: boolean
  questaoRespondida?: (questao: QuestionModel) => void
  proximoPasso?: () => void
}

export default function Questionario(props: QuizProps) {

  if (props.question.respondida) {
    props.proximoPasso();
  }

  const respostaFornecida = (indice: number) => {
    if (props.question.naoRespondida) {
      props.questaoRespondida(props.question.responderCom(indice));
    }
  }

  return (
    <div className={styles.quiz}>
      {props.question
        ?
        <Questao
          valor={props.question}
          tempoPraResposta={6}
          respostaFornecida={respostaFornecida}
          tempoEsgotado={props.proximoPasso}
        />
        : false
      }
      <Botao
        onClick={props.proximoPasso}
        text={props.lastQuest ? "Finalizar" : "Próxima"}
      />
    </div>
  )
}