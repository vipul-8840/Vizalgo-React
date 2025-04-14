import React, { useState } from 'react'
import Layout from './layout';
import Control from './control';
import Dropdown from '../Dropdown/dropdown';
import DarkModeToggler from '../toggle';
import { bubbleSort } from '../../algorithm/bubbleSort';

const Home = () => {
    const[arr,setArr]=useState([50,60,70,100]);
     const [selectedOption, setSelectedOption] = useState('Sorting');
     function handleNewArray()
     {
      console.log('handle call')
       const newArr = Array.from({length:20},()=>{
            return Math.floor(Math.random() * 500)
        })
        setArr(newArr)
        console.log(arr);
     }
     const handleOptionClick = (option) => {
      console.log(option)
        switch(option)
        {
          case 'Bubble Sort': {
                 console.log("called function")
                const animationArr = bubbleSort(arr);
                BubbleAnimation(animationArr);
               break;
          }
          default :
                   return ;
        }
    };
    function BubbleAnimation()
    {
      console.log("bubble animation");
    }
  return (
    <div lassName='min-h-screen'  >
            <div className='flex items-center gap-4 p-4 '>
                <DarkModeToggler/> 
                <Control handleNewArray={handleNewArray} />
                <Dropdown selectedOption={selectedOption} handleOptionClick={handleOptionClick}/>
            </div>
              <div className="flex-grow flex justify-center items-center">
                <Layout arr={arr} />
              </div>
       
      </div>
  )
}

export default Home
