import React, { FC } from 'react'
import styles from './content.module.css'
import Container from '~/shared/components/container/container.component';

type Props = {
  content?: any;
}

const Content: FC<Props> = ({ content }) => {
  console.log('Content', content)

  return (
    <dialog open={!!content} className={styles.root}>
      <Container>
        {content}
      </Container>
    </dialog>
  )
}

export default Content