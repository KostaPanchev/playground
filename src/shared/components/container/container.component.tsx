import React, { FC } from 'react'
import styles from './container.module.css'

type Props = {
    children: React.ReactNode
}

const Container: FC<Props> = ({children}) => {
  console.log('Container')

  return (
    <div className={styles.root}>{children}</div>
  )
}

export default Container