import React, { FC } from 'react'
import styles from './main-navigation.module.css'
import Container from '~/shared/components/container/container.component'

const MainNavigation: FC = () => {
  console.log('MainNavigation')

  return (
    <nav className={styles.root}>
      <Container>
        MainNavigation
      </Container>
    </nav>
  )
}

export default MainNavigation