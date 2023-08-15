import { InboxIcon, SparklesIcon } from '@heroicons/react/24/outline'
import Abouthome1 from '@/images/AboutHome1.svg'
import Image from 'next/image'

export function AboutHome() {
  return (
    <div className="bg-white">
      <main>
        <div className="overflow-hidden bg-white py-12 lg:py-12">
          <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative mt-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
              <div className="mt-6">
                <svg
                  className="px0 absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
                  width={750}
                  height={784}
                  fill="none"
                  viewBox="-120 0 1 784"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={400}
                    height={784}
                    fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
                  />
                </svg>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[#3300FF]">
                    <InboxIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <br></br>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
                  What is GeeksPod?
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  In a world where finding the best engineer is difficult and
                  matching people with businesses is far from possible. So, at
                  GeeksPod we use special techniques to make this possible. In
                  the ever-evolving galaxy of technology, GeeksPod stands at the
                  forefront, revolutionizing the way businesses access top tier
                  talent and harness the power of Artificial Intelligence. Our
                  two-pronged approach, encompassing AI Augmentation and Staff
                  Augmentation, empowers your business with unparalleled
                  capabilities and expertise.{' '}
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

              <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
                <Image
                  className="relative mx-auto"
                  width={340}
                  height={340}
                  src={Abouthome1.src}
                  alt="geekspod-candidate-card"
                />
              </div>
            </div>
          </div>
        </div>
        {/* More main page content here... */}
      </main>
    </div>
  )
}
