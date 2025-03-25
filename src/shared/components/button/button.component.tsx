import React, { FC, HTMLAttributes, ReactNode } from 'react'
// import styles from './Button.module.css'

type Variant = 'primary' | 'secondary' | 'tertiary'

type Props = HTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children?: ReactNode;
}

const Button: FC<Props> = ({ variant, children, ...rest }) => {
  console.log('Button', variant)
  // TODO: Implement variant styles


  return (
    <button {...rest}>{children}</button>
  )
}

export default Button