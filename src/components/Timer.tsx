import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../styles/Timer.module.css";

interface TimerProps {
  duracao: number
  tempoEsgotado: () => void
}

export default function Temporizador(props: TimerProps) {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        duration={props.duracao}
        size={115}
        isPlaying
        onComplete={props.tempoEsgotado}
        colors={['#60f05b', '#f7b801', '#ed2b1c', '#ed2b1c']}
        colorsTime={[7, 5, 2, 0]}
      >
        { ({ remainingTime }) => remainingTime }
      </CountdownCircleTimer>
    </div>
  )
}