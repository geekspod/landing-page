import Link from 'next/link'
import {
    BoltIcon,
    ChatBubbleBottomCenterTextIcon,
    EnvelopeIcon,
    GlobeAltIcon,
    ScaleIcon,
  } from '@heroicons/react/24/outline'
  
  import AboutHome from '@/images/aboutHome2.png'
  import Image from 'next/image'

  const transferFeatures = [
    {
      id: 1,
      name: 'What’s a Pod?',
      description: 'An ideal team of people that combine their skills for your company’s needs.',
      icon: GlobeAltIcon,
    },
    {
      id: 2,
      name: 'How to make one?',
      description:
        'Fill a form with your requirements and let us assemble the perfect team. ',
      icon: ScaleIcon,
    },
    {
      id: 3,
      name: 'Not sure about what you need?',
      description:
        'Book an appointment with one of our consultants and let’s figure it out together. ',
      icon: BoltIcon,
    },
  ]
  const communicationFeatures = [
    {
      id: 1,
      name: 'Mobile notifications',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      id: 2,
      name: 'Reminder emails',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: EnvelopeIcon,
    },
  ]


  export function AboutHome2(){
    return (
      <div >
      <main >

        <div className="overflow-hidden bg-gray-50 py-16 lg:py-24" style={{ backgroundImage: `linear-gradient(180deg, #1A27C8 0%, #0D1465 100%)`}}>
          <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">


            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="mt-6">


            <dl className="mt-10 space-y-10">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Let&apos;s Make A Pod!</h3>

                {transferFeatures.map((item) => (
                  <div key={item.id} className="relative ">
                    <dt>
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-[#000000] text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-white">{item.name}</p>
                    </dt>
                    <dd style= {{color:'#CDCDCD'}} className="mt-2 ml-16 text-base">{item.description}</dd>
                  </div>
                ))}
              </dl>
        
             
              <div className="mt-7">
                  <Link
                    href="/make-a-pod"
                    
                  >
                    <p className="inline-flex rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-indigo-900 shadow-sm">Accelerate</p>
                </Link>
                </div>
              </div>

              <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">

                <img
                  className="relative mx-auto"
                  width={656}
                  src={AboutHome.src}
                  alt="geekspod-lets-make-a-pod"
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



