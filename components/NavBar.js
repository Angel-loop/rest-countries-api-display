import React from 'react'
import { useThemeContext } from '../context/theme'
import Link from 'next/link'
import { useLoadContext } from '../context/load'

function NavBar() {
    const [theme, setTheme] = useThemeContext()
    const [loading, setLoading] = useLoadContext()
    

    return (
        <nav className={loading ? 'hidden' : ''}>
            <div className={theme ? 'dark' : ''}>
                <div className='flex flex-row justify-between p-8 bg-white dark:bg-dark-blue shadow-lg shadow-dark-blue-lm'>
                    <Link href='/'>
                        <a className='font-semibold text-dark-blue-lm dark:text-white text-xl'>HomePage</a>
                    </Link>
                    <button onClick={() => setTheme(!theme)} className='font-semibold text-dark-blue-lm dark:text-white'>Dark Mode</button>
                </div>
            </div>
        </nav>
     )
}

export default NavBar