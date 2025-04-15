import React, { useEffect, useRef, useState } from 'react'
import Layout from './layout';
import Control from './control';
import Dropdown from '../Dropdown/dropdown';
import DarkModeToggler from '../toggle';
import { bubbleSort } from '../../algorithm/bubbleSort';

const Home = () => {
    const[arr,setArr]=useState([100,60,80,50]);
    const[userInputArray,setUserInputArray]=useState('');
    const[speed,setSpeed]=useState(200)
    const[isSorting,setIsSorting]=useState(false);
    const refs = useRef([]);
    const [selectedOption, setSelectedOption] = useState('Sorting');
    useEffect(()=>{
         const inputArray = userInputArray.split(',');
         const filteredInput = inputArray.filter((item)=>{
             if(!isNaN(item) && Number.isInteger(parseFloat(item)))
              return item
         }).map(item => Number(item) <= 500 && Number(item));
         if (filteredInput.length > 0) {
          setArr(filteredInput);
        }

    },[userInputArray])

     function handleNewArray()
     {
      console.log('handle call')
       const newArr = Array.from({length:10},()=>{
            return Math.floor(Math.random() * 500)
        })
        setArr(newArr)
            setTimeout(() => {
              refs.current.forEach((bar, idx) => {
                  if (bar) {
                      bar.style.height = `${newArr[idx]}px`;
                      bar.innerText = newArr[idx];
                      bar.style.backgroundColor = 'blue';
                  }
              });
          }, 0);
     }
     const resetBars = () => {
      refs.current.forEach((bar, idx) => {
          if (bar) {
              bar.style.height = `${arr[idx]}px`;
              bar.innerText = arr[idx];
              bar.style.backgroundColor = 'blue';
          }
      });
  };

     const handleOptionClick = (option) => {
      setSelectedOption(option);
        switch(option)
        {
          case 'Bubble Sort': {
                  resetBars();
                const animationArr = bubbleSort(arr,refs,speed,setIsSorting);
                console.log(animationArr);
                bubbleAnimation(animationArr,speed,isSorting);
               break;
          }
          default :
                   return ;
        }
    };
    function bubbleAnimation(animation,speed, setIsSorting) {
        for (let i = 0; i < animation.length; i++) {
          const step = animation[i];
      
          setTimeout(() => {
            if (step.type === "compare") {
              const [i1, i2] = step.indices;
              refs.current[i1].style.backgroundColor = 'yellow';
              refs.current[i2].style.backgroundColor = 'yellow';
            } 
            else if (step.type === "swap") {
              const [i1, i2] = step.indices;
              refs.current[i1].style.backgroundColor = 'red';
              refs.current[i2].style.backgroundColor = 'red';
      
              // Swap height
              const tempHeight = refs.current[i1].style.height;
              refs.current[i1].style.height = refs.current[i2].style.height;
              refs.current[i2].style.height = tempHeight;
      
              // Swap innerText
              const tempText = refs.current[i1].innerText;
              refs.current[i1].innerText = refs.current[i2].innerText;
              refs.current[i2].innerText = tempText;
            } 
            else if (step.type === "revert") {
              const [i1, i2] = step.indices;
              refs.current[i1].style.backgroundColor = 'blue';
              refs.current[i2].style.backgroundColor = 'blue';
            } 
            else if (step.type === "sorted") {
              const i1 = step.index;
              refs.current[i1].style.backgroundColor = 'green';
            }
          }, 4*i * speed);
        }
      
        // After all animation steps, mark sorting as done
        setTimeout(() => {
          setIsSorting((prev)=>!prev);
        }, 4*animation.length * speed + 100);
      }
      
  return (
    <div className='min-h-screen'  >
            <div className='flex items-center gap-4 p-4 '>
                <DarkModeToggler/> 
                <Control handleNewArray={handleNewArray} userInputArray={userInputArray} setUserInputArray={setUserInputArray}  setSpeed={setSpeed} isSorting={isSorting} />
                <Dropdown selectedOption={selectedOption} handleOptionClick={handleOptionClick}/>
            </div>
              <div className="flex-grow flex justify-center items-center">
                <Layout arr={arr} refs={refs} />
              </div>
       
      </div>
  )
}

export default Home
