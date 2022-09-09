import React from 'react'
import Image from 'next/image'

function Card(props) {

  return (
    <div className='flex flex-col max-w-xs  bg-dark-blue '>


    
          <img src={props.flags.svg} alt={`Flag of ${props.name}`} ></img>

      <div className='p-4'>

        <h2 className='text-white'>{props.name.common}</h2>
        <p className='text-white'>Population: {props.population}</p>
        <p className='text-white'>Region: {props.region}</p>
        <p className='text-white'>Capital: {props.capital}</p>
      </div>
     
    </div>
  )
}

export default Card