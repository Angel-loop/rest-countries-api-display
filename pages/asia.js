import SearchBar from '../components/SearchBar'
import Card from '../components/Card'
import { useThemeContext } from '../context/theme'

export default function asia({countries}) {

  const [theme, setTheme] = useThemeContext()

  return (
    <div className={theme ? 'dark' : ''}>
      <div  className="bg-dark-gray dark:bg-very-dark-blue">
          <SearchBar/>
          <div className="grid grid-cols-4 gap-14 p-12">
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
	const res = await fetch('https://restcountries.com/v3.1/region/asia')
	const countries = await res.json()

	return {
		props : {
			countries,
		},
	}
}