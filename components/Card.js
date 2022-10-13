import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLoadContext } from '../context/load'

function Card(props) {

  const router = useRouter()

  const formatter = Intl.NumberFormat('en', {notation: "compact"})
  
  const [loading, setLoading] = useLoadContext()

  return (
    <div className={loading ? 'hidden' :'z-0'}>
      
        <Link href={`/search/${props.name.common}`}>
            <div className=' rounded-lg flex flex-col max-w-xs bg-white dark:bg-dark-blue transition ease-in-out hover:scale-110 duration-500 cursor-pointer'>
              
              <Image src={props.flags.png} alt={`Flag of ${props.name.common}`} width={240} height={160}></Image>

              <div className='p-4'>

                <h2 className='text-dark-blue-lm dark:text-white'>{props.name.common}</h2>
                <p className='text-dark-blue-lm dark:text-white'>Population: {formatter.format(props.population)}</p>
                <p className='text-dark-blue-lm dark:text-white'>Region: {props.region}</p>
                <p className='text-dark-blue-lm dark:text-white'>Capital: {props.capital}</p>
              </div>
            
            </div>
        </Link>
    </div>
  )
}

export default Card