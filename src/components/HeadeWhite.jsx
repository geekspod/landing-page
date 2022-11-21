
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import POD_Background from '@/images/POD-bg.jpg'
import LogoBlue from '@/images/logos/LogoBlue.png'
import LogoBlack from '@/images/logos/LogoBlack.png'
import LogoWhite from '@/images/logos/LogoWhite.png'
import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'For Individuals', href: '/Why-geekspod' },
  { name: 'For Companies', href: '/Geeks' },
  { name: "Let's Connect", href: '/Contact' },
]

export function HeaderWhite(){
    return(
<div className="relative overflow-hidden">
<Popover as="header" className="relative">
  <div className="bg-white pt-6">
    <nav
      className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
      aria-label="Global"
    >
      <div className="flex flex-1 items-center">
        <div className="flex w-full items-center justify-between md:w-auto">
          <Link href="/" >
            <span className="sr-only">GeeksPod</span>
            <Image width="65%"  height="26%"
              className="h-4 w-auto sm:h-4"
              src={LogoBlack.src}
              alt=""
            />
            </Link>
         
  
        </div>
        <div className="hidden space-x-8 md:ml-10 md:flex sm:flex">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-base font-medium text-gray-900 ">
              {item.name}
            </a>
          ))}
        </div>
      </div>

    </nav>
  </div>

 
</Popover>
<br></br>
</div>)}