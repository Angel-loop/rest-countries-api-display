import Head from 'next/head'
import '../styles/globals.css'
import { ThemeProvider} from '../context/theme'
import NavBar from '../components/NavBar'
import Loader from '../components/Loader'
import { LoadingProvider } from '../context/load'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
	
	return (
  
	<ThemeProvider>
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
			<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"/> 
		</Head>

		<LoadingProvider>
			<NavBar/>
			<Loader/>
			<Component {...pageProps} />
			<Footer/>
		</LoadingProvider>

	</ThemeProvider>

)}

export default MyApp
