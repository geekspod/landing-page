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
                    <p className="mt-2 text-white text-xl font-bold tracking-tight lg:text-3xl">Simplify your checkout process.</p>
                    <p className="mt-3 text-sm lg:text-lg text-gray-300">
                        GAPP Blocks is a scalable, easy-to-use and fast way to set up merchants with an eCommerce store. Now you can sell anywhere without the hassle of third-party payment gateways: just integrate once, get your store set up and selling in one click, and enjoy easy payment processing for any mobile device or desktop. 
                    </p>
                    <div className="mt-8">

                    </div>
                </div>
            </div>
        </div>
  )
}