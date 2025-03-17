import React, { FC } from 'react'
import MainNavigation from '../main-navigation/main-navigation.component'
import styles from './header.module.css'

const Header: FC = () => {
  console.log('Header')

  return (
    <header className={styles.root}>
        Header
        <MainNavigation />
    </header>
  )
}

export default Header