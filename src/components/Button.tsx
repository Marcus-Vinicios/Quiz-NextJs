import Link from "next/link"
import styles from "../styles/Button.module.css"

interface ButtonProps {
  href?: string
  text: string
  onClick?: (e: any) => void
}

export default function Botao(props: ButtonProps) {

  const button = () => {
    return (
      <button className={styles.button}
        onClick={props.onClick}>
        {props.text}
      </button>
    )
  }

  if (props.href) {
    return (
      <Link href={props.href} >
        {button()}
      </Link>
    )
  } else {
    return button();
  }

}