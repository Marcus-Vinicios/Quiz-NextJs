import questions from "../QuestionsDatabase";

export default function questoesPorId(req, res) {
  const questId = +req.query.id;

  const selectedQuestions = questions.filter(quest => quest.id === questId);

  if(selectedQuestions.length === 1) {
    const selectedQuest = selectedQuestions[0].embaralharRespostas();
    res.status(200).json(selectedQuest.paraObjeto());
  } else {
    res.status(204).send();
  }
}