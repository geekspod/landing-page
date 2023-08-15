import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import logo1 from '@/images/logos/logo1.svg'
import logo2 from '@/images/logos/logo2.svg'
import logo3 from '@/images/logos/logo3.svg'
import logo4 from '@/images/logos/logo4.svg'
import logo5 from '@/images/logos/logo5.svg'
import logo7 from '@/images/logos/logo7.svg'

import Image from 'next/image'

const solutions = [
  {
    name: 'Inbox',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Messaging',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Live Chat',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Knowledge Base',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: QuestionMarkCircleIcon,
  },
]
const navigation = [
  { name: 'Pricing', href: '#' },
  { name: 'Partners', href: '#' },
  { name: 'Company', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function LogosHome() {
  return (
    <div className="mt-16 bg-white">
      <div className="max-w-8xl px-18 mx-auto  -mt-8  ">
        <div className=" grid grid-cols-2 gap-1 md:grid-cols-6 ">
          <div className="col-span-1 flex justify-center bg-gray-50 py-12 px-8">
            <Image src={logo1} alt="Logo 1" />
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-2 px-8">
            <Image src={logo2} alt="Logo 2" />
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-2 px-8">
            <Image src={logo3} alt="Logo 3" />
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-2 px-8">
            <Image src={logo4} alt="Logo 4" />
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-2 px-8">
            <Image src={logo5} alt="Logo 5" />
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-2 px-8">
            <Image src={logo7} alt="Logo 7" />
          </div>
          <div className="mb-4"></div>
        </div>
      </div>
    </div>
  )
}

export default LogosHome
