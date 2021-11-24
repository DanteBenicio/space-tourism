import { useContext, useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Background } from '../components/Background';
import { Context } from '../context';
import Image from 'next/image'
import styles from '../styles/Destination.module.scss'
import { DescriptionTitle } from '../components/DescriptionTitle';
import { Title } from '../components/Title';

const Destination = () => {
  const { addClassActive, menuList, setMenuList } = useContext(Context)
  const [burguer, setBurguer] = useState(false);
  const [planetList, setPlanetList] = useState([
    {
      id: 0,
      name: 'MOON',
      avgDistance: '384,400 KM',
      travelTime: '3 DAYS',
      imageURL: '/assets/destination/image-moon.png',
      textContent: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
      regain perspective and come back refreshed. While you’re there, take in some history 
      by visiting the Luna 2 and Apollo 11 landing sites.`,
      selected: true
    },
    {
      id: 1,
      name: 'MARS',
      avgDistance: '225 MIL. KM',
      travelTime: '9 MONTHS',
      imageURL: '/assets/destination/image-mars.png',
      textContent: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
      the tallest planetary mountain in our solar system. It’s two and a half times 
      the size of Everest!`,
      selected: false
    },
    {
      id: 2,
      name: 'EUROPA',
      avgDistance: '628 MIL. KM',
      travelTime: '3 YEARS',
      imageURL: '/assets/destination/image-europa.png',
      textContent: ` The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
      winter lover’s dream. With an icy surface, it’s perfect for a bit of 
      ice skating, curling, hockey, or simple relaxation in your snug 
      wintery cabin.`,
      selected: false
    },
    {
      id: 3,
      name: 'TITAN',
      avgDistance: '1.6 BIL. KM',
      travelTime: '7 YEARS',
      imageURL: '/assets/destination/image-titan.png',
      textContent: `The only moon known to have a dense atmosphere other than Earth, Titan 
      is a home away from home (just a few hundred degrees colder!). As a 
      bonus, you get striking views of the Rings of Saturn.`,
      selected: false
    },
  ])

  function RenderContent() {
    const contentSelected = planetList.find(planet => planet.selected)

    if (!contentSelected) return;

    return (
      <main className={styles.main_content}>
        <section className={styles.section_image}>
          <Image src={contentSelected.imageURL} alt="text" width="445px" height="445px"/> 
        </section>

        <section className={styles.section_content}>
          <ul className={styles.list}>
            {planetList.map((planet, index) => (
              <li key={index} onClick={() => selectPlanet(planet.id)} className={planet.selected ? styles.selected: ''}>{planet.name}</li>
            ))}
          </ul>
          
          <Title titleName={contentSelected.name}/>

          <p className={styles.planetTextContent}>
            {contentSelected.textContent}
          </p>

          <div className={styles.planetInfo}>
            <div>
              <p>AVG. DISTANCE</p>
              <span>{contentSelected.avgDistance}</span>
            </div>

            <div>
              <p>EST. TRAVEL TIME</p>
              <span>{contentSelected.travelTime}</span>
            </div>
          </div>
        </section>
      </main>
    )
  }

  function selectPlanet(id) {
    const planetIsSelected = planetList.find(planet => {
      if (planet.id === id && planet.selected) return planet
    })

    if (planetIsSelected) return;

    const attPropertyActive = planetList.map(li => {
      if (li.selected) {
        return {
          ...li,
          selected: false
        }
      }

      if (li.id === id) {
        return {
          ...li,
          selected: true
        }
      }

      return li
    })

    setPlanetList(attPropertyActive)
  }
 
  return (
    <Background page="Destination">
      <Header
        page="Destination"
        burguer={burguer}
        setBurguer={setBurguer}
        menuList={menuList}
        setMenuList={setMenuList}
        addClassActive={addClassActive}
       />


      <main className={styles.main_container}>
        <DescriptionTitle number="01" title="Pick Your Destination"/>
          <RenderContent />
      </main>
    </Background>
  )
}

export default Destination;