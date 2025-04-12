import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DarkModeToggler from './components/toggle'

function App() {
  

  return (
    <>
         <div className='flex flex-col min-h-screen justify-center items-center bg-white dark:bg-gray-700 dark:text-white text-black'>
                <h2 className='font-medium'>Tailwind Css Dark Mode</h2> 
                <p>CLick the button to toggle Dark Mode!</p>

                <DarkModeToggler/>
                    
            </div>
       
    </>
  )
}

export default App
