import React from 'react'

const OverallSummary = ({icon, title, figure}) => {
  return (
    <div className='flex flex-col md:flex-row items-center gap-4 justify-center md:h-[80px] w-1/3 py-2 mx-1 md:mx-0 md:w-[180px] bg-colorWhite1 shadow rounded'>
      <figure className='md:w-[38px] md:h-[38px] flex items-center justify-center rounded-md'>{icon && <img src={icon} alt="" />}</figure>
      <div className='flex flex-col items-center md:items-start'>
        <p className='text-[14px] text-colorGray3'>{title}</p>
        <h6>{figure}</h6>
      </div>
    </div>
  )
}

export default OverallSummary