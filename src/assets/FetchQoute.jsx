import React ,{useEffect,useState} from 'react'
import Loading from './Loading'
import Qoutes from './Qoutes'
import Error from './Error'
const FetchQoute = () => {
    const [randomQoutes,setRandomQoutes]=useState({
        qoutes:"",
        author: ""
      })
      const[err,setErr]=useState(false)
      const [loading,setLoading]=useState(false)
      const apiFetch = async () => {
        try {
          setLoading(true);
            const resp = await fetch("https://api.quotable.io/random");
            const data = await resp.json();
            console.log(data);
            const qoutes=data.content;
         const author=data.author;
          setRandomQoutes({ qoutes, author });
          document.title = `Quote || ${author}`;
          setLoading(false);
          setErr(false)
        } catch (error) {
          console.log(error);
          setLoading(false);
          setErr(true);
        }
      };
      
      useEffect(()=>{
      apiFetch()
      },[])
      
        const handleClick=()=>{
          apiFetch()
        }
        const handleTabs=()=>{
          window.open(`https://en.wikipedia.org/wiki/${randomQoutes.author}`, "_blank");
        }
  return (
        <div className='absolute  top-1/2 left-1/2 transform w-[75%]  lg:w-[55%] rounded-md px-[35px] dark:bg-white bg-[#222020] -translate-x-[50%] -translate-y-1/2'>
      {
       !err&&!loading &&  ( 
       <Qoutes 
       qoutes={randomQoutes.qoutes} 
       author={randomQoutes.author}
       onClick={handleClick}
       onTabs={handleTabs}
        />)
       
      }
      {
        err  && (<Error />)
      }
      {
       loading &&  ( <Loading />)
      }
    
     </div>
  )
    }

export default FetchQoute