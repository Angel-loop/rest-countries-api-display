import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Card(props) {

  const router = useRouter()

  const formatter = Intl.NumberFormat('en', {notation: "compact"})

  return (
    <Link href={`/search/${props.name.common}`}>
        <div className=' rounded-lg flex flex-col max-w-xs bg-dark-blue transition ease-in-out hover:scale-110 duration-500 cursor-pointer'>
          
          <img src={props.flags.svg} alt={`Flag of ${props.name.common}`} ></img>

          <div className='p-4'>

            <h2 className='text-white'>{props.name.common}</h2>
            <p className='text-white'>Population: {formatter.format(props.population)}</p>
            <p className='text-white'>Region: {props.region}</p>
            <p className='text-white'>Capital: {props.capital}</p>
          </div>
        
        </div>
    </Link>
  )
}

export default Card