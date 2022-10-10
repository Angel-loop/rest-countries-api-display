import Head from 'next/head'
import '../styles/globals.css'
import { ThemeProvider, useThemeContext } from '../context/theme'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
	
	return (
  
	<ThemeProvider>
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
			<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"/> 
		</Head>

		<NavBar/>
		<Component {...pageProps} />

	</ThemeProvider>

)}

export default MyApp
