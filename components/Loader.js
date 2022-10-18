import React from 'react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useThemeContext } from '../context/theme'
import { useLoadContext } from '../context/load'

const Spinner = ()=> {
  const [theme, setTheme] = useThemeContext()

  return (

      <div className={theme ? 'dark h-full z-50' : 'h-full z-50'}>
        <div className='grid place-items-center z-10 h-full bg-dark-gray dark:bg-very-dark-blue'>
          <svg fill="none"  height="15vh" viewBox="0 0 24 24" width="15vw" xmlns="http://www.w3.org/2000/svg" className='animate-spin dark:fill-white'>
            <path clipRule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" fillRule="evenodd" opacity="0.2"/>
            <path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="currentColor"/>
          </svg>
        </div>
      </div>
  )
}



function Loader() {
  const router = useRouter();

  const [loading, setLoading] =  useLoadContext();

    useEffect(() => {
        const handleStart = (url) => (url !== router.asPath) && setLoading(true);
        const handleComplete = (url) => (url === router.asPath) && setLoading(false);

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    })
    
    return loading && (<Spinner/>);

}

export default Loader
