import { useContext, useState } from "react";
import { Background } from "../components/Background";
import { Header } from "../components/Header";
import { Context } from "../context";
import Image from 'next/image'
import styles from '../styles/Crew.module.scss'
import { DescriptionTitle } from "../components/DescriptionTitle";
import { Title } from "../components/Title";

const Crew = () => {
  const { addClassActive, menuList, setMenuList} = useContext(Context)
  const [burguer, setBurguer] = useState(false);
  const [importantPeople, setImportantPeople] = useState([
    { 
      id: 0,
      name: 'DOUGLAS HURLEY',
      office: 'COMMANDER',
      imageURL: '/assets/crew/image-douglas-hurley.png',
      textContent: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. 
      He launched into space for the third time as commander of Crew Dragon Demo-2. `,
      selected: true
    },
    {
      id: 1,
      name: 'MARK SHUTTLEWORTH',
      office: 'MISSION SPECIALIST',
      imageURL: '/assets/crew/image-mark-shuttleworth.png',
      textContent: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. 
      Shuttleworth became the first South African to travel to space as a space tourist.`,
      selected: false
    },
    {
      id: 2,
      name: 'VICTOR GLOVER',
      office: 'PILOT',
      imageURL: '/assets/crew/image-victor-glover.png',
      textContent: `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S.
      Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. `,
      selected: false
    },
    {
      id: 3,
      name: 'ANOUSHEH ANSARI',
      office: 'FLIGHT ENGINEER',
      imageURL: '/assets/crew/image-anousheh-ansari.png',
      textContent: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
      Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. `,
      selected: false
    },
  ])

  function selectPerson(id) {
    const personIsSelected = importantPeople.find(person => {
      if (person.id === id && person.selected) return person
    })

    if (personIsSelected) return;

    const selectedPerson = importantPeople.map(person => {
      if (person.selected) {
        return {
          ...person,
          selected: false
        }
      }

      if (person.id === id) {
        return {
          ...person,
          selected: true
        }
      }

      return person
    })

    setImportantPeople(selectedPerson)
  }

  function RenderContent() {
    const personSelected = importantPeople.find(person => person.selected)

    if (!personSelected) return;

    return (
      <>
        <main className={styles.main_content}>
          <h2 className={styles.office}>{personSelected.office}</h2>
          <Title titleName={personSelected.name} fontSize="56px"/>
          <p>
            {personSelected.textContent}
          </p>

          <ul className={styles.listPerson}>
            {importantPeople.map((person, index) => (
              <li key={index} onClick={() => selectPerson(person.id)} className={person.selected ? styles.list_selected : styles.list}></li>
              ))}
          </ul>
        </main>
        <section>
          <Image src={personSelected.imageURL} alt="Person" width="100%" height="100%" layout="responsive"/>
        </section>
      </>
    )
  }

  return (
    <Background page='Crew'>
      <Header
        page="Crew"
        burguer={burguer}
        setBurguer={setBurguer}
        menuList={menuList}
        setMenuList={setMenuList}
        addClassActive={addClassActive}
      />

        <DescriptionTitle number="02" title="Meet Your Crew"/>
      <main className={styles.main_container}>
        <RenderContent />
      </main>
    </Background>
  )
}

export default Crew;