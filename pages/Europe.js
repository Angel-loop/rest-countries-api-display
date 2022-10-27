import SearchBar from '../components/SearchBar'
import Card from '../components/Card'
import { useThemeContext } from '../context/theme'


export default function europe({countries}) {

  const [theme, setTheme] = useThemeContext()

  return (
    <div className={theme ? 'dark' : ''}>
      <div  className="bg-dark-gray dark:bg-very-dark-blue">
        <SearchBar/>
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 p-12">
          {countries.map(country => {
            return <Card 
            key={country.id}
            {...country}/>
          })}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(){

  const req = await fetch('https://restcountries.com/v3.1/region/europe')
	const countries = await req.json()

	return {
		props : {
			countries,
		},
	}
}