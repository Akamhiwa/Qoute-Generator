import React,{useState,useEffect} from 'react'

const Boxbackground = () => {

  const [arrLength, setArrLength] = useState(40);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) { 
        setArrLength(9);
      } else {
        setArrLength(40);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const arr = Array.from({ length: arrLength }, (_, i) => i + 1);
  return (
    <div className='h-screen dark:bg-black/85  bg-[#FFF6F6] overflow-hidden grid md:grid-cols-8  md:grid-rows-5  grid-rows-3 grid-cols-3  '> 
   {arr.map((_,index)=>{
    return (
      <div className={` w-auto h-auto   border-l-0  hover:bg-[#222020] dark:hover:bg-[#ffffff41]  border-2 border-gray-400 inline-block`}
        key={index}></div>
    )
   })}
    </div>
  )
}

export default Boxbackground