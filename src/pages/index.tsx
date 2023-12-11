import Questionario from '../components/Quiz';
import QuestionModel from '../models/question';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// const BASE_URL = "http://localhost:3000/api"; -> URL local
const BASE_URL = "https://quiz-next-js-indol.vercel.app/api"; // URL da vercel 

export default function Home() {
  const router = useRouter();

  const [questionsIds, setQuestionsIds] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>();
  const [respostasCertas, setRespostasCertas] = useState<number>(0);

  async function loadIdQuestions() {
    const resp = await fetch(`${BASE_URL}/quiz`);
    const questionsIds = await resp.json();
    setQuestionsIds(questionsIds);
  }

  async function loadQuestion(questionId: number) {
    const resp = await fetch(`${BASE_URL}/questions/${questionId}`);
    const data = await resp.json();
    const newQuestion = QuestionModel.criarUsandoObjeto(data);
    setQuestion(newQuestion);
  }

  useEffect(() => {
    loadIdQuestions();
  }, []);

  useEffect(() => {
    questionsIds.length > 0 && loadQuestion(questionsIds[0]);
  }, [questionsIds]);

  const questaoRespondida = (questaoRespondida: QuestionModel) => {
    setQuestion(questaoRespondida);
    const acertou = questaoRespondida.acertou;
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0));
    console.log(respostasCertas + (acertou ? 1 : 0));
  }

  const idProximaQuestao = () => {
    if (question) {
      const proximoIndice = questionsIds.indexOf(question.id) + 1;
      return questionsIds[proximoIndice];
    }
  }

  const proximoPasso = () => {
    const proximoId = idProximaQuestao();
    proximoId ? proximaQuestao(proximoId) : finalizar();
  }

  function proximaQuestao(proximoId: number) {
    loadQuestion(proximoId);
  }

  function finalizar() {
    router.push({
      pathname: "/resultado",
      query: {
        total: questionsIds.length,
        certas: respostasCertas
      }
    })
  }

  return question ? (
    <Questionario
      question={question}
      lastQuest={idProximaQuestao() === undefined}
      questaoRespondida={questaoRespondida}
      proximoPasso={proximoPasso}
    />
  ) : false
}
