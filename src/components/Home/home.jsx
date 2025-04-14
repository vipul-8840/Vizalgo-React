import React, { useEffect, useRef, useState } from 'react'
import Layout from './layout';
import Control from './control';
import Dropdown from '../Dropdown/dropdown';
import DarkModeToggler from '../toggle';
import { bubbleSort } from '../../algorithm/bubbleSort';

const Home = () => {
    const[arr,setArr]=useState([100,60,80,50]);
    const[userInputArray,setUserInputArray]=useState('');
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
       const newArr = Array.from({length:20},()=>{
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
           setTimeout(() => {
            barOne.style.backgroundColor = swap ? 'red' : 'yellow';
            barTwo.style.backgroundColor = swap ? 'red' : 'yellow';

            if (swap) {
                const tempHeight = barOne.style.height;
                barOne.style.height = barTwo.style.height;
                barTwo.style.height = tempHeight;

                const tempText = barOne.innerText;
                barOne.innerText = barTwo.innerText;
                barTwo.innerText = tempText;
            }

                  setTimeout(() => {
                      barOne.style.backgroundColor = 'blue';
                      barTwo.style.backgroundColor = 'blue';
                  }, 500);
              }, i * 500);
            }
      setTimeout(() => {
        for (let i = 0; i < refs.current.length; i++) {
            setTimeout(() => {
                const bar = refs.current[i];
                if (bar) bar.style.backgroundColor = 'green';
            }, i * 100);
        }
    }, animation.length * 500 + 100);
   };

  return (
    <div className='min-h-screen'  >
            <div className='flex items-center gap-4 p-4 '>
                <DarkModeToggler/> 
                <Control handleNewArray={handleNewArray} userInputArray={userInputArray} setUserInputArray={setUserInputArray} />
                <Dropdown selectedOption={selectedOption} handleOptionClick={handleOptionClick}/>
            </div>
              <div className="flex-grow flex justify-center items-center">
                <Layout arr={arr} refs={refs} />
              </div>
       
      </div>
  )
}

export default Home
