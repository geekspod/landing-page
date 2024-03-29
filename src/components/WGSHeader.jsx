import WSGHeaderImg from '@/images/WSGHeader.png'
import Image from 'next/image'

export function WGSHeader() {
  return (
    <div
      className="relative bg-gray-800"
      style={{
        backgroundImage: `linear-gradient(180deg, #1A27C8 0%, #0D1465 100%)`,
      }}
    >
      <div className="h-56 bg-white sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <Image
          className="h-full w-full object-cover"
          src={WSGHeaderImg}
          alt="geekspod-disrupt-the-competition"
          layout="fill"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <p className="mt-2 text-xl font-bold tracking-tight text-white lg:text-3xl">
            Whether you are an established organization or an up & coming start
            up, you need a team that aligns with your goals{' '}
          </p>
          <p className="mt-3 text-sm text-gray-300 lg:text-lg">
            Luckily, we are here to help. Our vetting and scrutiny processes
            make sure that we hire the perfect geeks for you! So all
            that&appos;s left for you to do is consult us.{' '}
          </p>{' '}
          <div className="mt-8"></div>
        </div>
      </div>
    </div>
  )
}
