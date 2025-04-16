import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({handleOptionClick,selectedOption}) => {

    const[toggle,setToggle] = useState(false);
   
    const options = ['Sorting','Bubble Sort', 'Selection Sort', 'Insertion Sort'];

    const toggleDropdown = ()=>{
        setToggle((toggle)=>!toggle);
    }
   
     
  return (
    <div className='relative w-[200px]'>
                <div
                onClick={toggleDropdown}
                className='border border-gray-400 px-3 py-2 rounded-md cursor-pointer font-bold flex justify-between items-center shadow-sm bg-gray-500'
               >
                {selectedOption}
                <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-gray-700" />
            </div>
        <div>
            {
                toggle && (
                    <div className='absolute mt-1 border border-gray-400 rounded-md shadow-sm bg-gray-500 z-10 w-[200px]'>

                    {options.map((option, index) => (
                                <div
                                key={index}
                                className='px-3 py-2 cursor-pointer hover:bg-blue-500 hover:text-white'
                                onClick={() => {
                                    handleOptionClick(option);
                                    setToggle(false);
                                }}
                                >
                                {option}
                                </div>
                            ))}
                                            
                    </div>
                  
                )
            }
        </div>
    </div>
  )
}

export default Dropdown
