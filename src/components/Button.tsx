import {ButtonHTMLAttributes} from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

// Todos atributos que forem passados para o component Button será recebido nesse elemento button aqui
export function Button(props: ButtonProps) {
  return (
    <button className="button" {...props}>

    </button>
  );
}