import Link from "next/link"
import { useLoadContext } from "../context/load"
import { useThemeContext } from "../context/theme"

function Error() {

    const [theme, setTheme] = useThemeContext() 
    const [loading,setLoading] = useLoadContext()

  return (
    <div className={loading ? 'hidden' : ''}>
      <div className={theme ? 'dark h-full' : 'h-full'}>
          <div className=" bg-dark-gray dark:bg-very-dark-blue text-dark-blue-lm dark:text-white grid grid-rows-2 place-content-center  h-full">
          <h1 className="text-3xl mt-auto">Sorry, the page you are looking for doesn't exit</h1>
          <Link href='/' >
              <a className="text-2xl p-4 bg-white dark:bg-dark-blue shadow-md m-auto transition ease-in-out hover:scale-110 duration-500 mt-4">Go back to home page</a>
          </Link>
          </div>
      </div>
    </div>
  )
}

export default Error


export async function getStaticProps() {
  return {
    props: { noLayout: true },
  }
}