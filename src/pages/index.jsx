import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Logo from '../../public/assets/shared/logo.jsx'
import { useState } from 'react'

export default function Home() {
  const [menuList, setMenuList] = useState([
    {
      id: 0,
      content: 'Home',
      active: true,
    },
    {
      id: 1,
      content: 'Destination',
      active: false
    },
    {
      id: 2,
      content: 'Crew',
      active: false
    },
    {
      id: 3,
      content: 'Technology',
      active: false,
    }
  ])

  function addClassActive(id) {
    const attPropertyActive = menuList.map(li => {
      if (li.active) {
        return {
          ...li,
          active: false
        }
      }

      if (li.id === id) {
        return {
          ...li,
          active: true
        }
      }

      return li
    })

    setMenuList(attPropertyActive)
  }

  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/png" sizes="32x32" href='../../static/favicon-32x32.png'/>

        <title>Frontend Mentor | Space tourism website</title>
      </Head>

      <div className={styles.background}>
        <header className={styles.header_content}>
          <Logo />
          <nav className={styles.navbar}>
            <ul className={styles.list}>
             {menuList.map(li => (
               <li key={li.id} onClick={() => addClassActive(li.id)} className={li.active ? styles.active : ''} >
                 <a href="#"><span>0{li.id}</span> {li.content}</a>
               </li>
             ))}
            </ul>
          </nav>
        </header>

        <main className={styles.main_content}>
          <article className={styles.article_content}>
            <h2>So, you want to travel to</h2>
            <h1>Space</h1>
            
            <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!

            </p>
          </article>

          <div className={styles.explore}>
            <span>Explore</span>
          </div>
        </main>
      </div>
    </>
  )
}
