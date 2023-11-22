import { embaralhar } from "../functions/Shuffle";
import ResponseModel from "./response";

export default class QuestionModel {
  #id: number;
  #enunciado: string;
  #respostas: ResponseModel[];
  #acertou: boolean;
  // #respondido: boolean;

  constructor(
    id: number,
    enunciado: string,
    respostas: ResponseModel[],
    acertou: boolean
  ) {
    this.#id = id;
    this.#enunciado = enunciado;
    this.#respostas = respostas;
    this.#acertou = acertou;
  }

  get id() {
    return this.#id;
  }

  get enunciado() {
    return this.#enunciado;
  }

  get respostas() {
    return this.#respostas;
  }

  get acertou() {
    return this.#acertou;
  }

  get naoRespondida() {
    return !this.respondida;
  }

  get respondida() {
    for (let resposta of this.#respostas) {
      if (resposta.revelada) {
        return true;
      }
    }
    return false;
  }

  responderCom(indice: number): QuestionModel {
    const acertou = this.#respostas[indice]?.certa;
    const answers = this.#respostas.map((answer, i) => {
      const selectedAnswer = indice === i;
      const toRevel = selectedAnswer || answer.certa;
      return toRevel ? answer.revelar() : answer;
    });
    return new QuestionModel(
      this.#id,
      this.#enunciado,
      answers,
      acertou
    )
  }

  embaralharRespostas(): QuestionModel {
    let respostasEmbaralhadas = embaralhar(this.#respostas);
    return new QuestionModel(
      this.#id,
      this.#enunciado,
      respostasEmbaralhadas,
      this.#acertou
    )
  }

  static criarUsandoObjeto(obj: QuestionModel): QuestionModel {
    const answers = obj.respostas.map((answer) => ResponseModel.criarUsandoObjeto(answer));
    return new QuestionModel(
      obj.id,
      obj.enunciado,
      answers,
      obj.acertou
    );
  }

  paraObjeto() {
    return {
      id: this.#id,
      enunciado: this.#enunciado,
      respostas: this.#respostas.map(res => res.paraObjeto()),
      respondida: this.respondida,
      acertou: this.#acertou
    }
  }

}