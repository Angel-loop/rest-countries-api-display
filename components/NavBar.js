import React from 'react'
import { useThemeContext } from '../context/theme'
import Link from 'next/link'
import { useLoadContext } from '../context/load'
import Moon from '../public/Moon.svg'
import Sun from '../public/Sun.svg'
import Globe from '../public/Globe.svg'

function NavBar() {
    const [theme, setTheme] = useThemeContext()
    const [loading, setLoading] = useLoadContext()
    

    return (
        <nav className={loading ? 'hidden' : ''}>
            <div className={theme ? 'dark' : ''}>
                <div className='flex flex-row justify-between p-8 bg-white dark:bg-dark-blue shadow-lg shadow-dark-blue-lm'>
                    <Link href='/'>
                        <a className='font-semibold text-dark-blue-lm dark:text-white text-xl dark:fill-white'><Globe width='2.5rem' height='2.5rem'/>Home</a>
                    </Link>
                    <button onClick={() => setTheme(!theme)} className='font-semibold text-dark-blue-lm dark:text-white'>
                    <div className='flex place-items-center gap-4 dark:fill-white fill-dark-blue-lm'>
                        <span className={theme ? '' : 'hidden'}><Moon width='2.5rem' height='2.5rem'/></span>
                        <span className={theme ? 'hidden' : ''}><Sun width='3rem' height='3rem'/></span>
                    </div>
                    </button>
                </div>
            </div>
        </nav>
     )
}

export default NavBar