import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DarkModeToggler from './components/toggle'
import Home from './components/Home/home'
import { ThemeProvider } from './context/context'

function App() {
  return (
    <ThemeProvider>
        
         <div className='bg-white dark:bg-gray-700 dark:text-white text-black'>
               <DarkModeToggler/> 
                 <div className='flex flex-col min-h-screen justify-center items-center bg-white dark:bg-gray-700 dark:text-white text-black'>
                    <h2 className='font-medium'>Tailwind Css Dark Mode</h2> 
                    <p>CLick the button to toggle Dark Mode!</p>
                      <Home/>
                 </div>
               

               
                
            </div>
       
    </ThemeProvider>
  )
}

export default App
