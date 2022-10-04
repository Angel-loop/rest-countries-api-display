import Card from "../../components/Card"
import { useRouter } from 'next/router'
import { useState } from 'react'

function index({data}) {

  const [input, setInput] = useState('')
  const router = useRouter()


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
  let display = <div>It seems you may have misspelled the country name. Try again!</div>

  //if the server responds with a 200 status sets display to render the countries
  
  if(!data.message){
    display = data.map(country => {
      return <Card 
      key={country.name.common}
      {...country}/>
    })
  
  }

  return (
    <div  className="bg-very-dark-blue">

      <div className='p-12'>
        <form className=" w-1/3 h-12 px-4 py-1 rounded-md bg-dark-blue text-white shadow-dark-blue-lm shadow-md flex items-center">
          <button className="mx-2" type="submit" onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} height={20} className="fill-white">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
          </svg>
          </button>
          <input type='text' placeholder="Search" className="bg-dark-blue w-full" onChange={handleChange}></input>
        </form>
      </div>
	
		  <div className="grid grid-cols-4 gap-14 p-12">

          {display}
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