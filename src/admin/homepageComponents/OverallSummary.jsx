import React from 'react'

const OverallSummary = ({icon, title, figure}) => {
  return (
    <div className='flex items-center gap-4 justify-center md:h-[100px] md:w-[180px] shadow rounded'>
      <figure className='bg-colorWhitishBlue md:w-[38px] md:h-[38px] flex items-center justify-center rounded-md'>{icon && <img src={icon} alt="" />}</figure>
      <div>
        <p className='text-[14px] text-colorGray3'>{title}</p>
        <h6>{figure}</h6>
      </div>
    </div>
  )
}

export default OverallSummary