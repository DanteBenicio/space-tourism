import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Logo from '../../public/assets/shared/logo.jsx'
import { useEffect, useState } from 'react'
import { HomeContent } from '../contents/HomeContent';
import { Destination } from '../contents/Destination';
import { Crew } from '../contents/Crew';
import { Technology } from '../contents/Technology';

export default function Home() {
  const [burguer, setBurguer] = useState(false);
  const [menuList, setMenuList] = useState([
    {
      id: 0,
      name: 'Home',
      active: true,
    },
    {
      id: 1,
      name: 'Destination',
      active: false
    },
    {
      id: 2,
      name: 'Crew',
      active: false
    },
    {
      id: 3,
      name: 'Technology',
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

  function renderContent() {
    const pageContent = menuList.find(content => content.active)

    switch (pageContent.name) {
      case 'Home':
        return <HomeContent />
      case 'Destination':
        return <Destination />
      case 'Crew':
        return <Crew />
      case 'Technology':
        return <Technology />
    }
  }

  useEffect(() => {
    const burger = document.querySelector('.'+styles.burguer)
    const navbar = document.querySelector('.'+styles.navbar)

    burger.addEventListener('click', () => {
      navbar.style.transition = 'transform 0.2s linear';
      
      setTimeout(() => {
        navbar.style.transition = '';
      }, 200)
    })

  }, [])

  return (
    <div className={styles.background}>   
        <header className={styles.header_content}>
          <Logo />
          <div className={burguer ? styles.burguer_active : styles.burguer} onClick={() => setBurguer(burguer => !burguer)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          
          <nav className={styles.navbar}>
            <ul className={styles.list}>
             {menuList.map(li => (
               <li key={li.id} onClick={() => addClassActive(li.id)} className={li.active ? styles.active : ''} >
                 <a href="#"><span>0{li.id}</span> {li.name}</a>
               </li>
             ))}
            </ul>
          </nav>

        </header>
        {renderContent()}

    </div>
  )
}
