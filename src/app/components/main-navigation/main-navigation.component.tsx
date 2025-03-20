'use client'
import React, { FC, useState } from 'react'
import styles from './main-navigation.module.css'
import Container from '~/shared/components/container/container.component'
import Link from 'next/link'
import Content from './components/content/content.component'

const MainNavigation: FC = () => {
  console.log('MainNavigation')
  const [activeLink, setActiveLink] = useState<string | null>(null)

  // const handleLinkClick = (link: string) => {
  //   setActiveLink(link)
  // }

  return (

    <nav className={styles.root} onMouseLeave={() => setActiveLink(null)}>
      <Container>
        <ul className={styles.links}>
          <li><Link href="/" onMouseEnter={() => setActiveLink('Link 1')}>Link 1</Link></li>
          <li><Link href="/" onMouseEnter={() => setActiveLink('Link 2')}>Link 2</Link></li>
          <li><Link href="/" onMouseEnter={() => setActiveLink('Link 3')}>Link 3</Link></li>
          <li><Link href="/" onMouseEnter={() => setActiveLink('Link 4')}>Link 4</Link></li>
          <li><Link href="/" onMouseEnter={() => setActiveLink('Link 5')}>Link 5</Link></li>
        </ul>
      </Container>
      <Content content={activeLink} />
    </nav>
  )
}

export default MainNavigation