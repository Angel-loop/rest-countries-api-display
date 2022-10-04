import Card from "../components/Card"
import SearchBar from "../components/SearchBar"



export default function Home({countries}) {
	
		
	return (
	
	<div  className="bg-very-dark-blue">

		<SearchBar/>
	
		<div className="grid grid-cols-1 place-items-center md:grid-cols-4 gap-14 p-12">

		{countries.map(country => {
			return <Card 
			key={country.name.common}
			{...country}/>
		})}

		</div>
	
	</div>
  )
}


export async function getStaticProps(){
	const res = await fetch('https://restcountries.com/v3.1/all')
	const countries = await res.json()

	return {
		props : {
			countries,
		},
	}
}