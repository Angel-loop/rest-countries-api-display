import Card from "../components/Card"
import SearchBar from "../components/SearchBar"
import { useThemeContext } from "../context/theme"



export default function Home({countries = null}) {
	
	const [theme, setTheme] = useThemeContext()	

	return (
	<div className={theme ? 'dark' : ''}>
		<div  className=" bg-dark-gray dark:bg-very-dark-blue">
			<SearchBar/>
			<div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 p-12">
			{countries.map(country => {
				return <Card 
				key={country.name.common}
				{...country}/>
			})}
			</div>
		
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