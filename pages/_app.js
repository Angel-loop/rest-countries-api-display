import Head from 'next/head'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
  
	<>
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
			<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"/> 
		</Head>

		<nav className='flex flex-row justify-between p-8 bg-dark-blue'>
			<p className='font-semibold text-white'>Where in the world?</p>
			<p className='font-semibold text-white'>Dark Mode</p>
		</nav>
		<Component {...pageProps} />
	</>

)}

export default MyApp
