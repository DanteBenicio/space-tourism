import { useContext, useState } from "react";
import { Background } from "../components/Background";
import { DescriptionTitle } from "../components/DescriptionTitle";
import { Header } from "../components/Header";
import { Title } from '../components/Title'
import { Context } from "../context";
import Image from 'next/image'
import styles from '../styles/Technology.module.scss'

const Technology = () => {
  const { menuList, setMenuList, addClassActive } = useContext(Context)
  const [burguer, setBurguer] = useState(false);
  const [ technologyList, setTechnologyList ] = useState([
    {
      id: 1,
      name: 'LAUNCH VEHICLE',
      textContent: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. 
      Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
      imageURL: '/assets/technology/image-launch-vehicle-portrait.jpg',
      selected: true,
    },
    {
      id: 2,
      name: 'SPACEPORT',
      textContent: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft.
      Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
      imageURL: '/assets/technology/image-space-capsule-portrait.jpg',
      selected: false,
    },
    {
      id: 3,
      name: 'SPACE CAPSULE',
      textContent: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. 
      It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
      imageURL: '/assets/technology/image-spaceport-portrait.jpg',
      selected: false,
    },
  ])
  
  function RenderContent() {
    const technologySelected = technologyList.find(tech => tech.selected)

    if (!technologySelected) return;

    return (
      <main className={styles.main_container}>
        <main className={styles.main_content}>
          <ul className={styles.rocket_list}>
            {technologyList.map(tech => (
              <li key={tech.id} className={tech.selected ? styles.selected : ''} onClick={() => selectTechnology(tech.id)}>
                <span className={styles.rocket_number}>{tech.id}</span>
              </li>
            ))}
          </ul>

          <section className={styles.section_content}>
            <h3>THE TERMINOLOGY...</h3>
            <Title titleName={technologySelected.name} fontSize="56px"/>
            <p>{technologySelected.textContent}</p>
          </section>
        </main>
        <Image src={technologySelected.imageURL} className={styles.rocket_image} alt="Foguete" width="515px" height="527px"/>
      </main>
    )
  }

  function selectTechnology(id) {
    const technologyIsSelected = technologyList.find(tech => {
      if (tech.id === id && tech.selected) return tech
    })

    if (technologyIsSelected) return;

    const attSelectedTechnology = technologyList.map(tech => {
      if (tech.selected) {
        return {
          ...tech,
          selected: false,
        }
      }

      if (tech.id === id) {
        return {
          ...tech,
          selected: true,
        }
      }

      return tech
    })

    setTechnologyList(attSelectedTechnology)
  }

  return (
    <Background page="Technology">
      <Header 
        page="Technology"
        burguer={burguer}
        setBurguer={setBurguer}
        menuList={menuList}
        setMenuList={setMenuList}
        addClassActive={addClassActive}
      />

      <DescriptionTitle number="03" title="Space LAUNCH 101"/>
      <RenderContent />
    </Background>
  )
}

export default Technology;