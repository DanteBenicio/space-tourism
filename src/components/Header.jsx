import { useCallback, useEffect } from 'react'
import Logo from '../../public/assets/shared/logo.jsx'
import styles from '../styles/Home.module.scss'

export const Header = ({ setBurguer, burguer, setMenuList, menuList, addClassActive, page }) => {
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

  const setActivePage = useCallback(() => {
    setMenuList(menuList.map(li => {
      if (li.name === page) {
        return {
          ...li,
          active: true
        }
      }
  
      return li
    }))

  }, [])
  
  useEffect(() => {
    setActivePage()
  }, [setActivePage])

  return (
    <header className={styles.header_content}>
      <Logo />
      <div className={burguer ? styles.burguer_active : styles.burguer} onClick={() => setBurguer(burguer => !burguer)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
        {menuList.map(li => (
          <li key={li.id} onClick={() => addClassActive(li.id)} className={li.active ? styles.active : ''} >
            <a href={`/${li.name === 'Home' ? '' : li.name}`}>
              <span>0{li.id}</span> {li.name}
            </a>
          </li>
        ))}
        </ul>
      </nav>
    </header>
  )
}