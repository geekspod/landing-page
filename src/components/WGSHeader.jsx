import WSGHeaderImg from '@/images/WSGHeader.png'
import Image from 'next/image'


export function WGSHeader() {
  return (
    <div className="relative bg-gray-800" style={{ backgroundImage: `linear-gradient(180deg, #1A27C8 0%, #0D1465 100%)`}}>
            <div className="h-56 bg-accent sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                <img
                    className=" w-full h-full object-cover"
                    src={WSGHeaderImg.src}
                    alt=""
                />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="md:ml-auto md:w-1/2 md:pl-10">
                    <p className="mt-2 text-white text-xl font-bold tracking-tight lg:text-3xl">Have an up-&-running organization, or an up-&-coming startup that's ready to disrupt the competition?</p>
                    <p className="mt-3 text-sm lg:text-lg text-gray-300">
                    you'll need a team that aligns with your goals. Well,we are here to help. Our vetting and scrutiny processes make sure that we hire the perfect geeks for you! So that all that's left for you to do, is consult us.                    </p>
                    <div className="mt-8">

                    </div>
                </div>
            </div>
        </div>
  )
}