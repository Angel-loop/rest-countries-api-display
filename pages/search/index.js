import Card from "../../components/Card"
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useThemeContext } from "../../context/theme"
import { useLoadContext } from "../../context/load"

function index({data}) {

  const router = useRouter()
  
  const [input, setInput] = useState('')
  const [theme, setTheme] = useThemeContext()
  const [loading, setLoading] = useLoadContext()



  //pushes user input to the url as query string
  const handleClick = (e)=>{
		e.preventDefault()
    router.push(`/search?country=${input.toLowerCase()}`)
	}

  //changes state on every key stroke
  const handleChange = (e)=>{
		setInput(e.target.value)

	}

  //Sets the contet of the page as an error by default
  let display = 
  <div className="grid place-items-center">
    <svg height="50px" version="1.1" viewBox="0 0 32 32" width="50px">
    <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
    <g fill="#929292" id="icon-102-folder-error">
    <path d="M19.0069444,26 L1.99328744,26 C0.899712682,26 0,25.1085295 0,24.008845 L0,13 L29,13 L29,20.9294118 L25.5,15 L19.0069444,26 L19.0069444,26 L19.0069444,26 Z M4.4408921e-16,12 L4.4408921e-16,5.991155 C4.4408921e-16,4.88967395 0.896666251,4 2.00276013,4 L13,4 L15,8 L26.9941413,8 C28.1029399,8 29,8.8932319 29,9.99508929 L29,12 L0,12 L4.4408921e-16,12 L4.4408921e-16,12 Z M25.5,17 L32,28 L19,28 L25.5,17 L25.5,17 Z M25,21 L25,24 L26,24 L26,21 L25,21 L25,21 Z M25,25 L25,26 L26,26 L26,25 L25,25 L25,25 Z" id="folder-error"/>
    </g>
    </g>
    </svg>

    <p className="text-3xl text-dark-blue-lm dark:text-white">Ups!</p>
    <p className="text-dark-blue-lm dark:text-white">Looks like we dont have what you're looking for</p>
  </div>

  //if the server responds with a 200 status sets display to render the countries
  if(!data.message){
    display = data.map(country => {
      return <Card 
      key={country.name.common}
      {...country}/>
    })
    
  
  }

  return (
    <div className={ theme ?  'dark min-h-full' : 'min-h-full'}>
     <div className={loading ? 'hidden min-h-full' : 'min-h-full'}>
        <div className=" bg-dark-gray dark:bg-very-dark-blue min-h-full">
          <div className='p-12'>
            <form className="w-full md:w-1/3 h-12 px-4 py-1 rounded-md bg-white dark:bg-dark-blue text-dark-blue-lm dark:text-white dark:shadow-dark-blue-lm shadow-md flex items-center">
              <button className="mx-2" type="submit" onClick={handleClick}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} height={20} className="dark:fill-white">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
              </svg>
              </button>
              <input type='text' placeholder="Search" className="bg-white dark:bg-dark-blue w-full" onChange={handleChange}></input>
            </form>
          </div>

          <div className={data.message ? 'grid place-items-center p-8 h-full' : "grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 p-12"}>
              {display}
          </div>
        </div>
      </div>
    </div>
  )
}

export default index

function filterQuery(obj, param){
  const name = obj.name.common

  if(name.toLowerCase().includes(param)){
    return true
  }else{return false}
}


//Server code
export async function getServerSideProps(context){

  //reads the query string from the url
  const name = context.query.country

  const req = await fetch(`https://restcountries.com/v3.1/name/${name}`)
  const res = await req.json()
 
  if(!res.message){
    const data = res.filter(country => filterQuery(country, name))
    return{ props: {data}}
  }else {
    const data = res
    return{ props: {data}}
  }
  
}