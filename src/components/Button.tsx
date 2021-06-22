import {ButtonHTMLAttributes} from 'react';
import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

// Todos atributos que forem passados para o component Button será recebido nesse elemento button aqui
export function Button(props: ButtonProps) {
  return (
    <button className="button" {...props}>

    </button>
  );
}