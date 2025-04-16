import React, { useEffect, useRef, useState } from 'react'
import Layout from './Visualizing';
import Control from './control';
import Dropdown from '../Dropdown/dropdown';
import DarkModeToggler from '../toggle';
import { bubbleSort } from '../../algorithm/bubbleSort';
import { selectionSort } from '../../algorithm/selectionSort';
import { Animation } from './Animation';

const Home = () => {
    const [arr, setArr] = useState([100, 60, 80, 50, 40, 70]);
    const [userInputArray, setUserInputArray] = useState('');
    const [speed, setSpeed] = useState(200);
    const [isSpeed, setIsSpeed] = useState(false);
    const refs = useRef([]);
    const [selectedOption, setSelectedOption] = useState('Sorting');
    const timeoutIds = useRef([]); 

    useEffect(() => {
        const inputArray = userInputArray.split(',');
        const filteredInput = inputArray.filter((item) => {
            if (!isNaN(item) && Number.isInteger(parseFloat(item)))
                return item
        }).map(item => Number(item) <= 500 && Number(item));
        if (filteredInput.length > 0) {
            setArr(filteredInput);
        }
    }, [userInputArray]);

    function clearAllTimeouts() { 
        timeoutIds.current.forEach(id => clearTimeout(id));
        timeoutIds.current = [];
    }

    function handleNewArray() {
        if (isSpeed) return; 
        const newArr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 500));
        setArr(newArr);
       const firstTimeout =  setTimeout(() => {
            refs.current.forEach((bar, idx) => {
                if (bar) {
                    bar.style.height = `${newArr[idx]}px`;
                    bar.innerText = newArr[idx];
                    bar.style.backgroundColor = 'blue';
                }
            });
        }, 0);
        timeoutIds.current.push(firstTimeout); 
    }

    const resetBars = () => {
      console.log("reset is called");
      clearAllTimeouts();
      setSelectedOption('Sorting');
        refs.current.forEach((bar, idx) => {
            if (bar) {
                bar.style.height = `${arr[idx]}px`;
                bar.innerText = arr[idx];
                bar.style.backgroundColor = 'blue';
            }
        });
        setIsSpeed(false);
    };

    const handleOptionClick = (option) => {
        if (isSpeed) return; 
        clearAllTimeouts(); 
        setSelectedOption(option);
        setIsSpeed(true); 
        console.log(option)
        switch (option) {
            case 'Bubble Sort': {
                
                const animationArr = bubbleSort(arr);
                Animation(animationArr, speed, setIsSpeed,refs,timeoutIds);
                break;
            }
             case 'Selection Sort' :{
                 
                const animationArr = selectionSort(arr);
                Animation(animationArr, speed, setIsSpeed,refs,timeoutIds);
                break;
             }
             case 'Insertion Sort' :{
                 
                const animationArr = selectionSort(arr);
                Animation(animationArr, speed, setIsSpeed,refs,timeoutIds);
                break;
             }

            default:
                return;
        }
    };

    // function bubbleAnimation(animation, speed, setIsSpeed) {
    //     for (let i = 0; i < animation.length; i++) {
    //         const step = animation[i];
    //         const timeoutId = setTimeout(() => {
    //             if (step.type === "compare") {
    //                 const [i1, i2] = step.indices;
    //                 refs.current[i1].style.backgroundColor = 'yellow';
    //                 refs.current[i2].style.backgroundColor = 'yellow';
    //             }
    //             else if (step.type === "swap") {
    //                 const [i1, i2] = step.indices;
    //                 refs.current[i1].style.backgroundColor = 'red';
    //                 refs.current[i2].style.backgroundColor = 'red';

    //                 const tempHeight = refs.current[i1].style.height;
    //                 refs.current[i1].style.height = refs.current[i2].style.height;
    //                 refs.current[i2].style.height = tempHeight;

    //                 const tempText = refs.current[i1].innerText;
    //                 refs.current[i1].innerText = refs.current[i2].innerText;
    //                 refs.current[i2].innerText = tempText;
    //             }
    //             else if (step.type === "revert") {
    //                 const [i1, i2] = step.indices;
    //                 refs.current[i1].style.backgroundColor = 'blue';
    //                 refs.current[i2].style.backgroundColor = 'blue';
    //             }
    //             else if (step.type === "sorted") {
    //                 const i1 = step.index;
    //                 refs.current[i1].style.backgroundColor = 'green';
    //             }
    //         }, 4 * i * speed);
    //         timeoutIds.current.push(timeoutId); 
    //     }

    //     const finalTimeout = setTimeout(() => {
    //         setIsSpeed(false);
    //     }, 4 * animation.length * speed + 100);
    //     timeoutIds.current.push(finalTimeout); 
    // }

    return (
        <div className='min-h-screen  flex flex-col '>
            <div className='flex items-center gap-4 p-4 '>
                <DarkModeToggler />
                <Control
                    handleNewArray={handleNewArray}
                    userInputArray={userInputArray}
                    setUserInputArray={setUserInputArray}
                    setSpeed={setSpeed}
                    isSpeed={isSpeed}
                    resetBars={resetBars}

                />
                <Dropdown
                    selectedOption={selectedOption}
                    handleOptionClick={handleOptionClick}
                />
            </div>
            <div className="flex-grow flex justify-center items-end pb-60">
                <Layout arr={arr} refs={refs} />
            </div>
        </div>
    )
}

export default Home;
