import { data } from 'autoprefixer'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'


function country({country}) {
  const data = country[0]
  //Gets the native Name
  const value = Object.keys(data.languages)
  const language = value[value.length - 1]
  const nativeName = data.name.nativeName

  const formatter = Intl.NumberFormat('en')

  const router = useRouter()


  return (
    <div className='bg-very-dark-blue h-full text-white p-16'>
      <button onClick={() => router.back()}>
        <a href='/' className=' flex place-content-center place-items-center mb-16 bg-dark-blue rounded-md w-32 p-2 shadow-dark-blue-lm shadow-md transition ease-in-out hover:scale-110'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={15} height={15} className='fill-white mr-2'>
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
          </svg>
          Back
        </a>
      </button>  

      <div className='grid grid-cols-2 gap-24'>

        <img src={data.flags.svg} alt={`Flag of ${data.name.common}`}></img>
        
        <div className='grid grid-cols-2'>
          <div className=''>
            <h1 className='text-4xl font-extrabold mb-8'>{data.name.common}</h1>
            <p className='font-semibold mb-2'>Native Name: <span className='font-extralight'>
              {nativeName[language].official}
            </span></p>
            <p className='font-semibold mb-2'>Population: <span className='font-extralight'>
              {formatter.format(data.population)}
            </span></p>
            <p className='font-semibold mb-2'>Region: <span className='font-extralight'>
              {data.region}
            </span></p>
            <p className='font-semibold mb-2'>Sub Region: <span className='font-extralight'>
              {data.subregion}
            </span></p>
            <p className='font-semibold '>Capital: <span className='font-extralight'>
              {data.capital}
            </span></p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default country



//Server Code

export async function getStaticPaths() {

  const res = await fetch('https://restcountries.com/v3.1/all')
  const data = await res.json()

  const paths = data.map(country => {
    return {
      params: {name: country.name.common}
    }
  })


  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context){

  const name = context.params.name
  
  const res = await fetch(`https://restcountries.com/v3.1/name/${name.toLowerCase()}`)
  const data = await res.json()


  return{
    props : {country : data}
  }

}