import { Fragment } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import LogoBlack from '@/images/logos/LogoBlack.png'
import LogoWhite from '@/images/logos/LogoWhite.png'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const solutions = [
  {
    name: 'For Individuals',
    href: '/for-individuals',
  },
  {
    name: 'For Companies',
    href: '/for-companies',
  },
  { name: 'Lets Connect', 
  href: '/Contact'
 },

]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
  },
  { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#' },
  { name: 'Events', description: 'See what meet-ups and other events we might be planning near you.', href: '#' },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function HeaderBlack() {
  return (
    <Popover style={{opacity:"100%"}} className="relative z-50 bg-[#000000]">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <div className='px-4 lg:px-14'>
        <div className="flex w-full items-center justify-between md:w-auto">
          
          <Link href="/" >
            <span className="sr-only">GeeksPod</span>
            <Image width="65%" height="26%"
              className="h-8 w-auto sm:h-10"
              src={LogoWhite.src}
              alt=""
              />
      
            </Link>
        
      </div>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#000000] p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <Popover.Group as="nav" className="flex space-x-10">
 
            <Link href="/for-individuals">
              <p className="text-base font-medium text-white hover:text-gray-400"> For Individuals </p>
              </Link>
            <Link href="/for-companies">
              <p className="text-base font-medium text-white hover:text-gray-400">  For Companies </p>
              </Link>
            <Link href="/Contact">
              <p className="text-base font-medium text-white hover:text-gray-400">  Let&apos;s Connect </p>
              </Link>

          </Popover.Group>
         
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-[#000000] shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                <Link href="/" >
            <span className="sr-only">GeeksPod</span>
            <Image width="65%" height="26%"
              className="h-8 w-auto sm:h-10"
              src={LogoWhite.src}
              alt=""
              />
      
            </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#000000] p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-6">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-900"
                    >
                    
                      <div className="ml-4 text-base font-medium text-white">{item.name}</div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
        
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
