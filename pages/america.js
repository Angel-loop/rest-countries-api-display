import React from 'react'
import SearchBar from '../components/SearchBar'
import Card from '../components/Card'

export default function america({countries}) {
  return (
    <div  className="bg-very-dark-blue">
		
      <SearchBar/>

      <div className="grid grid-cols-4 gap-14 p-12">

        {countries.map(country => {
          return <Card 
           key={country.id}
           {...country}/>
        })}

      </div>

    </div>
  )
}
export async function getStaticProps(){
	const res = await fetch('https://restcountries.com/v3.1/region/america')
	const countries = await res.json()

	return {
		props : {
			countries,
		},
	}
}
