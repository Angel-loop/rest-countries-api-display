import { useRouter } from 'next/router'
import React from 'react'
import {  useLoadContext } from '../../context/load'
import { useThemeContext } from '../../context/theme'


function country({country = null}) {


  const data = country[0]  
  //Gets the native Name
  
  const value = data.languages ? Object.keys(data.languages) : ''
  const language = value === '' ? 'No official Language' : value[value.length - 1] 
  const nativeName = data.name.nativeName 
  const nativeLanguage = data.languages 
  

  const currencyName = data.currencies ?  Object.keys(data.currencies) : ''
  const currency = data.currencies ? data.currencies : ''

  const formatter = Intl.NumberFormat('en')

  const router = useRouter()

  const [theme, setTheme] = useThemeContext()
  const [loading , setLoading] = useLoadContext()

  async function handleClick(countryCode){
    const req = await fetch(`https://restcountries.com/v3.1/alpha?codes=${countryCode}`)
    const [res] = await req.json()


    if(!res.message){
      const name = res.name.common
      router.push(`/search?country=${name.toLowerCase()}`)
    }
  }
  


  return (
    <div className={loading ? 'hidden' : ''}>
      <div className={theme ? 'dark' : ''}>
        <div className=' bg-dark-gray dark:bg-very-dark-blue text-dark-blue-lm dark:text-white p-8 md:p-16'>
          <button onClick={() => router.back()}>
            <a href='/' className=' flex place-content-center place-items-center mb-16 bg-white dark:bg-dark-blue rounded-md w-32 p-2 dark:shadow-dark-blue-lm shadow-md transition ease-in-out hover:scale-110'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={15} height={15} className='dark:fill-white mr-2'>
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
              </svg>
              Back
            </a>
          </button>  
          <main className='flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-24'>

            <img src={data.flags.svg} alt={`Flag of ${data.name.common}`}></img>
            <div className='md:grid md:grid-cols-2 md:grid-rows-3'>
              <section className='flex flex-col gap-2'>
                <h1 className='text-4xl font-extrabold mb-8'>{data.name.common}</h1>
                <p className='font-semibold mb-2'>Native Name: <span className='font-extralight'>
                  {data.languages ? nativeName[language].official : "No native names"}
                </span></p>
                <p className='font-semibold mb-2'>Population: <span className='font-extralight'>
                  {formatter.format(data.population)}
                </span></p>
                <p className='font-semibold mb-2'>Region: <span className='font-extralight'>
                  {data.region}
                </span></p>
                <p className='font-semibold mb-2'>Sub Region: <span className='font-extralight'>
                  {data.subregion ? data.subregion : 'No subregion'}
                </span></p>
                <p className='font-semibold mb-4'>Capital: <span className='font-extralight'>
                  {data.capital ? data.capital : "No capital"}
                </span></p>
              </section>

              <section className='flex flex-col gap-2 md:mt-28 '>
                <p className='font-semibold mb-2'>Currencies: <span className='font-extralight'>
                      {!data.currencies ? 'No official currency' : 
                      !currencyName > 1 ? currency[currencyName].name :
                      currencyName.map((name) => {
                        return <div>{currency[name].name}<br></br> </div>
                      } )}
                  </span>
                </p>
                <p className='font-semibold mb-2'> Languages: 
                  <span className='font-extralight'> {data.languages ? nativeLanguage[language] : 'No official Language'}</span>
                </p>
                <p className='font-semibold mb-2'> Top level domain: 
                  <span className='font-extralight'> {data.tld}</span>
                </p>
                
              </section>

              <section>
                <p className='text-1xl font-bold mb-4'>Border countries: </p>
                <div className='grid grid-cols-2 md:grid-cols-4 w-max gap-4'>
                  {data.borders ? data.borders.map((item, index) =>{
                    return (
                      <button onClick={() => handleClick(item)} key={index} className='bg-white dark:bg-dark-blue transition ease-in-out hover:scale-110 duration-500 px-8 py-1 shadow-lg'>
                        <p className='font-semibold text-base'>{item}</p>
                      </button>
                    )
                  } ) : 'No border countries'}
                </div>
              </section>

            </div>

          </main>

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
  
  const req = await fetch(`https://restcountries.com/v3.1/name/${name.toLowerCase()}`)
  const res = await req.json()

  const data = res.filter(country => country.name.common === name)

  return{
    props : {country : data}
  }

}