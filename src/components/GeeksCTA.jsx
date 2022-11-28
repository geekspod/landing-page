import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import GEEKS_CTA from '@/images/GeeksCTA.png'
import Image from 'next/image'

export function GeeksCTA() {

  return (
    <div className="relative bg-white">
            <div className="h-56 sm:h-22 md:absolute md:left-0 md:h-full md:w-1/2">
                <img
                width={762}
                    className=" w-full h-full object-cover"
                    src={GEEKS_CTA.src}
                    alt=""
                />
            </div>
            <br></br>
            <br></br>
         
            <div className="relative max-w-8xl mx-auto  sm:px-6 lg:px-8 lg:py-16">
                <div className="md:ml-auto md:w-1/2 md:pl-10">
                    <p className="mt-2 text-gray-900 text-2xl font-bold tracking-tight lg:text-3xl">WHAT KIND OF A GEEK ARE YOU?</p>
                    <p className="mt-3 text-lg text-gray-900">
                    *Insert Information on what kind of developers can be a part of GeeksPod* Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.                    </p>
                    <div className="mt-4">
            <div className="inline-flex rounded-md shadow">
              <a
              style={{
                backgroundColor: '#3300FF'
              }}
                className="inline-flex items-center justify-center rounded-md border border-transparent  px-5 py-3 text-base font-medium text-white hover:bg-gray-50"
              >
                Apply Now
                <ArrowTopRightOnSquareIcon className="-mr-1 ml-3 h-5 w-5 text-white" aria-hidden="true" />
              </a>

            </div>
            <div className='mb-4'></div>
          </div>
                </div>
            </div>
        </div>
  )
}
