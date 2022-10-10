import { Fragment, useState } from "react"
import { Menu, Transition } from '@headlessui/react'
import { useRouter } from "next/router"
import { useThemeContext } from "../context/theme"

export default function SearchBar() {

	const [input, setInput] = useState('')
  const router = useRouter()

  const [theme, setTheme] = useThemeContext()

  //changes state on every key stroke
	const handleChange = (e)=>{
		setInput(e.target.value)

	}
  //pushes user input to the url as query string
	const handleClick = (e)=>{
		e.preventDefault()
    router.push(`/search?country=${input.toLowerCase()}`)
	}
  //Navigates to one of the continent pages based on user input
  const handleNav = (path)=>{
    router.push(path)
  }

  
  return (
    <div className=" p-12 grid-cols-1 gap-12 md:flex md:justify-between md:flex-row z-10">
      <form className="w-full md:w-1/3 h-12 px-4 py-1 rounded-md bg-white dark:bg-dark-blue text-dark-blue-lm dark:text-white  dark:shadow-dark-blue-lm shadow-md flex items-center mb-4">

          <button className="mx-2" type="submit" onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} height={20} className="dark:fill-white">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
          </svg>
          </button>


          <input type='text' placeholder="Search" className="bg-white dark:bg-dark-blue w-full" onChange={handleChange}></input>
      </form>

      <Menu as="div" className="relative inline-block text-left text-dark-blue-lm dark:text-white bg-white dark:bg-dark-blue
      rounded-md dark:shadow-dark-blue-lm shadow-md w-full md:w-1/6 md:h-12">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-dark-blue-lm dark:text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-center">
          Filter By Region 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={15} height={15} className="dark:first-letter:fill-white ml-8">
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
          </svg>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-dark-blue shadow-lg focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={()=> handleNav('africa')}
                  className={`${
                    active ? 'bg-dark-gray dark:bg-very-dark-blue text-dark-blue-lm dark:text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-8 py-2 text-sm `}
              >
                  {active ? (
                    <div
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    >Africa</div>
                  ) : (
                    <div
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    >Africa</div>
                  )}
                  
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={()=> handleNav('america')}
                  className={`${
                    active ? 'bg-dark-gray dark:bg-very-dark-blue text-dark-blue-lm dark:text-white' : ''
                  } group flex w-full items-center rounded-md px-8 py-2 text-sm `}
              >
                  {active ? (
                    <div
                      div
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    >America</div>
                  ) : (
                    <div
                      div
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    >America</div>
                  )}
                  
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={()=> handleNav('asia')}
                  className={`${
                    active ? 'bg-dark-gray dark:bg-very-dark-blue text-dark-blue-lm dark:text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-8 py-2 text-sm `}
              >
                  {active ? (
                    <div
                      div
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    >Asia</div>
                  ) : (
                    <div
                      div
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    >Asia</div>
                  )}
                  
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={()=> handleNav('europe')}
                  className={`${
                    active ? 'bg-dark-gray dark:bg-very-dark-blue text-dark-blue-lm dark:text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-8 py-2 text-sm `}
              >
                  {active ? (
                    <div
                      div
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    >Europe</div>
                  ) : (
                    <div
                      div
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    >Europe</div>
                  )}
                  
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={()=> handleNav('oceania')}
                  className={`${
                    active ? 'bg-dark-gray dark:bg-very-dark-blue text-dark-blue-lm dark:text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-8 py-2 text-sm `}
              >
                  {active ? (
                    <div
                      div
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    >Oceania</div>
                  ) : (
                    <div
                      div
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    >Oceania</div>
                  )}
                  
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={()=> handleNav('/')}
                  className={`${
                    active ? 'bg-dark-gray dark:bg-very-dark-blue text-dark-blue-lm dark:text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-8 py-2 text-sm `}
              >
                  {active ? (
                    <div
                      div
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    >None</div>
                  ) : (
                    <div
                      div
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    >None</div>
                  )}
                  
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
      </Menu>

</div>

  )
}