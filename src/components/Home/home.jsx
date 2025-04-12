import React, { useState } from 'react'
import Layout from './layout';

const Home = () => {
    const[arr,setArr]=useState([50,60,70,100]);
  return (
    <div>

        <Layout arr={arr}/>
        
    </div>
  )
}

export default Home
