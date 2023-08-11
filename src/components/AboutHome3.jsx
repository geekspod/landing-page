import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'
import Abouthome1 from "@/images/AboutHome1.svg"
import Image from 'next/image'


const features = [
    {
      name: 'Human Intelligence',
      description:
        'We take pride in our unique approach to remote employment. GeeksPod proactively identifies top-tier candidates, investing in their learning and growth, ensuring only the best talents become part of your team. Whether you require short-term expertise or long-term collaboration, our Staff Augmentation services provide a seamless integration of skilled professionals into your projects.',
      href: '#',
      icon: 'HI',
    },
    {
      name: 'Artificial Intelligence',
      description:
        'At GeeksPod, we bring AI consulting to the forefront of your business. Our AI consultancy collaborate with your team, exploring opportunities where AI can elevate your operations to new heights. Together, we uncover untapped potential, crafting tailored AI strategies that align with your goals and objectives.',
      href: '#',
      icon: 'AI',
    },
    {
      name: 'Superhuman Intelligence',
      description:
        'GeeksPod AI Augmentation and Staff Augmentation services converge to create a dynamic force within your organization. Through this synergistic or symbiotic combination, we empower your team with AI-driven insights, enhanced capabilities, and access to top engineering talent. Together, we propel your business towards unmatched efficiency, innovation, and success.',
      href: '#',
      icon: 'SI',
    },
  ]
  

export function AboutHome3(){
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="flex items-center justify-center w-55vw mx-auto">
      <div className="text-center">
  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
    HI + AI = SI
  </h2>
  <p className="mt-6 text-lg leading-8 text-gray-600">
    Finding the right talent can be a cosmic challenge. That&apos;s where our Staff Augmentation comes into play. Our pods of agile, savvy engineers are constantly traveling through the vast digital space, ready to join your team as an extension of your workforce.
  </p>
</div>

</div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <span className="h-6 w-6 text-white" aria-hidden="true">
                          {feature.icon}
                        </span>
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
