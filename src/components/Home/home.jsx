import React, { useState } from 'react'
import Layout from './layout';
import Control from './control';

const Home = () => {
    const[arr,setArr]=useState([50,60,70,100]);
     function handleNewArray()
     {
      console.log('handle call')
       const newArr = Array.from({length:20},()=>{
            return Math.floor(Math.random() * 500)
        })
        setArr(newArr)
        console.log(arr);
     }
  return (
    <div>
        <Control handleNewArray={handleNewArray} />
        <Layout arr={arr}/>
        
    </div>
  )
}

export default Home
