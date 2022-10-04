import Head from 'next/head'
import '../styles/globals.css'
import Link from 'next/link'
import { useState } from 'react'


function MyApp({ Component, pageProps }) {
  
	const [darkMode, setDarkMode] = useState(true)
	
	return (
  
	<>
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
			<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"/> 
		</Head>

		<nav className='flex flex-row justify-between p-8 bg-dark-blue'>
		<Link href='/'>
			<a className='font-semibold text-white text-xl'>HomePage</a>
		</Link>
			<p className='font-semibold text-white'>Dark Mode</p>
		</nav>

		<Component {...pageProps} />
	</>

)}

export default MyApp
