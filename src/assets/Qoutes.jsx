import React from 'react'

const Qoutes = ({qoutes,author,onClick,onTabs}) => {
  return (
    <>
    <div className=' py-8 text-2xl lg:text-3xl text-white dark:text-[#2E2A2A]  transition-all duration-300 ' >
       { qoutes}
    </div>
       <div className='py-2 un text-base text-white dark:text-slate-700 lg:text-lg'>
          Author : <span className='pb-1 pr-1 border-b dark:border-black border-white hover:text-purple-600 hover:border-r transition-colors duration-300 cursor-pointer' onClick={onTabs}>{author}</span>
          </div>
           
    <div className='py-6'>
       <button className='py-1 ml-auto block  dark:text-white px-5 rounded-lg shadow-2xl shadow-black hover:scale-105 dark:bg-[#2E2A2A] bg-white text-black' onClick={onClick}>New qoute</button>
    </div>
  </>
  )
}

export default Qoutes