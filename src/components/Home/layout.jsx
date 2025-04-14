import React from 'react'

const Layout = ({arr,refs}) => {
  return (
    <div className='flex items-end gap-2  min-h-5 mt-5 bg-blue dark:bg-gray-700 dark:text-white text-black'>
     {
        arr.map((item,index)=>
            {
                return <div key={index} 
                ref={el => refs.current[index] = el}
                className={`bg-blue-500 dark:bg-gray-500 w-10 rounded-sm transition-all duration-300 `}
                style={{ height: `${item}px`}}>
                        {item}
                </div>
                   
            })
     }
      
    </div>
  )
}

export default Layout
