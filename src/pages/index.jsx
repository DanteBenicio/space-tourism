import styles from '../styles/Home.module.scss'
import { useContext, useEffect, useState } from 'react'
import { Header } from '../components/Header';
import { Background } from '../components/Background';
import { Context } from '../context';

export default function Home() {
  const { addClassActive, menuList, setMenuList} = useContext(Context)
  const [burguer, setBurguer] = useState(false);

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
      <Background page='Home'>
       <Header 
        page="Home"
        burguer={burguer}
        setBurguer={setBurguer}
        menuList={menuList}
        setMenuList={setMenuList}
        addClassActive={addClassActive}
        />

        <main className={styles.main_content}>
          <article className={styles.article_content}>
            <h2>SO, YOU WANT TO TRAVEL TO</h2>
            <h1>SPACE</h1>
                
            <p>Let’s face it if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
            </p>
          </article>

          <div className={styles.explore}>
            <span>EXPLORE</span>
            
            <div className={styles.overOval}>s
            </div>
          </div>
        </main>
      </Background>
  )
}
