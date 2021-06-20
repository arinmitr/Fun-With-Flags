import React, {useState, useEffect} from 'react'

import './useThemeSwitcher.styles.css'

function useThemeSwitcher() {

    const [mode, setMode] = useState("light")

    useEffect(() => {
      if(mode === "dark") {
        document.body.classList.add("light-mode") 
      }
      else {
        document.body.classList.remove("light-mode")   
      }
    }, [mode])

    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a className="cursor-pointer" onClick={() => setMode(mode => mode === "dark" ? "light" : "dark")}>
        <i className='far fa-moon'></i>
        <span className='mode-type'>{mode === "dark" ? "Light " : "Dark "}Mode</span>
        
      </a>
    )
}

export default useThemeSwitcher
