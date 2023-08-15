import MAP_Split from '@/images/MAPSplit.png'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

export function MAPSplit() {
  return (
    <div className="relative bg-white">
      <div className="h-56 bg-accent sm:h-72 md:absolute md:left-0 md:h-full md:w-7/12 lg:w-7/12">
        <Image
          src={MAP_Split}
          alt="geekspod-geek-bond"
          width={762}
          height={undefined} 
          className="h-full w-full object-cover"
        />
      </div>

      <div className="max-w-8xl relative mx-auto px-4 py-4 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-5/12 md:pl-10">
          <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
            Got a top-secret project?
          </p>
          <p className="-mt-2 text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
            {' '}
            We honor the Geek-Bond!
          </p>
          <p className="mt-3 text-lg text-gray-900">
            Our team of professionals strictly adhere to security and
            confidentiality requirements. The only details that need to be
            revealed are the project brief that our Geeks would be working on.
          </p>
          <div className="mt-4"></div>
        </div>
      </div>
    </div>
  )
}
