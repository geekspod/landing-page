import image1 from '@/images/image1.png'
import image2 from '@/images/image2.png'
import image3 from '@/images/image3.png'
import image4 from '@/images/image4.png'
import image5 from '@/images/image5.png'
import clsx from 'clsx'
import Image from 'next/image'



const navigation = {

  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/geekspod/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 20" {...props}>
          <path
            fillRule="evenodd"
            d="M3.03192 2.45626C3.03192 3.31879 2.36489 3.9965 1.51596 3.9965C0.667021 3.9965 0 3.31879 0 2.45626C0 1.59372 0.667021 0.916016 1.51596 0.916016C2.36489 0.916016 3.03192 1.59372 3.03192 2.45626ZM3.03192 5.22869H0V15.0862H3.03192V5.22869ZM7.88298 5.22869H4.85106V15.0862H7.88298V9.91102C7.88298 7.01537 11.5213 6.76893 11.5213 9.91102V15.0862H14.5532V8.86366C14.5532 3.9965 9.15638 4.18133 7.88298 6.5841V5.22869Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/geekspod',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/geekspod/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/geekspod',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ]
}



export function TeamHome() {
    let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

    return (
            <div className="  sm:hidden md:hidden lg:block relative overflow-hidden">
              <main >
                <div className="bg-[#000000] pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
                  <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                      <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                        <div className="lg:py-24">
                          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-4 xl:text-6xl">
                            <span className="block">Meet the Geeks :</span>
                          </h1>
                          <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-xl lg:mt-2 xl:mt-2">
                          The dream team of heroes ready to help you.
                  </p>
                  <div className="mt-8 flex space-x-6">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
                  <br></br>
                  <br></br>                  


                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
   {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
     <div
       key={image.src}
       className={clsx(
         'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
         rotations[imageIndex % rotations.length]
       )}
     >
       <Image 
         src={image}
         alt=""
         sizes="(min-width: 640px) 18rem, 11rem"
         className="absolute inset-0 h-full w-full object-cover"
       />
         </div>
         ))}
         </div>
                </div>
        
                {/* More main page content here... */}
              </main>
            </div>
          )
        }

    
  