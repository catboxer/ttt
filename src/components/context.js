import React, {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme,largeTextTheme, regularTextTheme } from "../themes/Themes";

const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle =()=> {
    setIsOpen(!isOpen)
    }

  const [theme, setTheme] = useState('light');
  const themeToggler =() => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  const [fontSize, setFontSize] = useState('regular');
  const fontSizeToggler =() => {
    fontSize === 'regular' ? setFontSize('large') : setFontSize('regular')
  }
  return <AppContext.Provider value={{themeToggler, toggle, isOpen, setIsOpen, theme, setTheme, setFontSize, fontSize, fontSizeToggler}}>
  <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
  <ThemeProvider theme={fontSize === 'regular' ? regularTextTheme : largeTextTheme}>
  {children}
  </ThemeProvider>
  </ThemeProvider>
  </AppContext.Provider>
}

export {AppContext, AppProvider}