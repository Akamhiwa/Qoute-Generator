import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center md:p-32 p-16'>
    <div
        className="inline-block h-20 w-20  animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
       
        </div>
        </div>
  )
}

export default Loading