import React, { useEffect,useState } from 'react'

const Darkmode = () => {
    const [isDark,setIsDark]=useState(true)
    useEffect(()=>{
        handleLocalStorage()
        if(localStorage.theme==="light"){
          setIsDark(false)
        }
        else{
          setIsDark(true)
        }
    },[])
    const handleLocalStorage=()=>{
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        
        }
      }
    const handleClick=()=>{
        setIsDark(!isDark)
        if(isDark){
          localStorage.theme = 'light'
          handleLocalStorage()
        }
        else if(!isDark){
          localStorage.theme = 'dark'
          handleLocalStorage()
        }
      }
      
  return (
    <div className='absolute top-16 right-[15%]'>
        <button className={`py-1.5 px-1 rounded-full w-16  flex  ${isDark ? "justify-end bg-[#D9D9D9]":"justify-start bg-[#2E2929]"}`} onClick={handleClick}>
          <div className={`w-[1.6rem] h-[1.6rem] rounded-full ${isDark ? "bg-[#1B1717]":"bg-white"}`}></div>
        </button>
    </div>
  )
}

export default Darkmode