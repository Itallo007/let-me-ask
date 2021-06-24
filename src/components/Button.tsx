import {ButtonHTMLAttributes} from 'react';
import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
}

// Todos atributos que forem passados para o component Button será recebido nesse elemento button aqui
export function Button({isOutlined=false, ...props}: ButtonProps) {
  return (
    <button
      className={`button ${isOutlined ? 'outlined':''}`}
      {...props}
    >

    </button>
  );
}