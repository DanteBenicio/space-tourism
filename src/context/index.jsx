import { createContext, useState } from 'react';

export const Context = createContext()

export function AppContext({ children }) {
  const [menuList, setMenuList] = useState([
    {
      id: 0,
      name: 'Home',
      active: false,
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

  return (
    <Context.Provider value={{ addClassActive, menuList, setMenuList }}>
      {children}
    </Context.Provider>
  )
}