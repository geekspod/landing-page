import { InboxIcon, SparklesIcon } from '@heroicons/react/24/outline'
import Abouthome4 from '@/images/AboutHome4.svg'
import Image from 'next/image'

export function AboutHome4() {
  return (
    <div className="bg-white">
      <main>
        <div className="overflow-hidden bg-white py-12 lg:py-12">
          <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative mt-12  lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
              <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
                <Image
                  className="relative mx-auto"
                  width={752}
                  height={500}
                  src={Abouthome4.src}
                  alt="geekspod-candidate-card"
                />
              </div>
              <div className="mt-6">
                <br></br>
                <p className="mt-4 text-lg text-gray-500">
                  Imagine a future where AI fuels your workforce&apos;s
                  ingenuity, and the brightest engineering minds become an
                  integral part of your team, working towards your common
                  vision. GeeksPod transforms this vision into a reality,
                  enabling your business to navigate the cosmos of possibilities
                  with confidence.
                  <br></br>
                  <br></br>
                  Embrace the power of GeeksPod&apos;s AI Augmentation and Staff
                  Augmentation solutions, and embark on a transformative journey
                  to define your place in the universe of technology. The stars
                  are the limit, and together, we&apos;ll reach for the cosmos
                  of endless opportunities!
                </p>

                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex rounded-md border border-transparent bg-[#3300FF] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* More main page content here... */}
      </main>
    </div>
  )
}
