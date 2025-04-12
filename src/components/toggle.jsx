import React from 'react'
import { useDarkMode } from '../context/context'


const DarkModeToggler = () => {
  const{darkMode,setDarkMode}=useDarkMode();

  return (
    <div >
         <button onClick={()=>setDarkMode(!darkMode)} className='px-6 bg-gray-200 dark:bg-white/15 rounded-md'>{darkMode ?" 🌙 Dark Mode" : " 🔆 Light Mode "}</button>
    </div>
  )
}

export default DarkModeToggler