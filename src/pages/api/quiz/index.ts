import { embaralhar } from "../../../functions/Shuffle";
import questions from "../QuestionsDatabase";

export default (req, res) => {
  const questionsId = questions.map((quest) => quest.id);

  res.status(200).json(embaralhar(questionsId));
}