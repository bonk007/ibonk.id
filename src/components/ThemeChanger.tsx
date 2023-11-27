'use client'
import {useTheme} from "next-themes";
import Image from "next/image";

const ThemeChanger = () => {
  const {theme, setTheme} = useTheme()
  const IconSize = 16
  return (
      <a href={`#`} onClick={(event) => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
        event.preventDefault()
        return false
      }}>
        <span className="material-symbols-outlined">{ theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
      </a>
  )
}

export default ThemeChanger
