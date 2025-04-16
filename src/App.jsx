import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DarkModeToggler from './components/toggle'
import Home from './components/Page/home'
import { ThemeProvider } from './context/context'

function App() {
  return (
    <ThemeProvider>
        
         <div className='bg-white dark:bg-gray-700 dark:text-white text-black min-h-screen'>
                               
                      <Home/>
                
          </div>
       
    </ThemeProvider>
  )
}

export default App
