import React, { useRef, useState } from 'react'
import Layout from './layout';
import Control from './control';
import Dropdown from '../Dropdown/dropdown';
import DarkModeToggler from '../toggle';
import { bubbleSort } from '../../algorithm/bubbleSort';

const Home = () => {
    const[arr,setArr]=useState([100,60,80,50]);
    const refs = useRef([]);
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
                 
                const animationArr = bubbleSort(arr);
                console.log(animationArr);
                bubbleAnimation(animationArr);
               break;
          }
          default :
                   return ;
        }
    };
    function bubbleAnimation(animation)
    {
      console.log(refs);
      
      for(let i=0;i<animation.length;i++)
      {
           let [barOneInd,barTwoInd,swap]=animation[i];
           let barOne = refs.current[barOneInd];
           let barTwo = refs.current[barTwoInd];
           barOne.style.backgroundColor = swap ?"red" :"yellow";
      }
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
                <Layout arr={arr} refs={refs} />
              </div>
       
      </div>
  )
}

export default Home
