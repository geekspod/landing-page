
import POD_Background from '@/images/POD-bg.jpg'


import pod from "@/images/pod.png"



export function HeaderHome(){
  return(
    <div  className="bg-white">
      <main>

        <div style={{
      backgroundImage: `url(${POD_Background.src})`,   backgroundRepeat: "no-repeat",   backgroundSize: "cover"
    }} className="overflow-hidden bg-gray-50  lg:py-24">
          <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">


            <div className="relative mt-0 lg:mt-0 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="">
  
            <div>
    
              </div>
              <br></br>
                <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold tracking-tight text-white">Amplify your Business </h2>
                <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold tracking-tight text-white">Intelligence with AI</h2>
                <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold tracking-tight text-white">and Staff Augmentation</h2>
                <p className="mt-4 text-xl text-white ">
                Lets build your dream team with <br></br>cutting-edge technologies

                </p>
           
              </div>

              <div className="relative -mx-4 mt-10 mb-0 lg:mb-24 xl:mb-24  lg:mt-0" aria-hidden="true">

                <img
                  className="relative mx-auto"
                  width={974}
                  src={pod.src}
                  alt="geekspod-ship-of-imagination"
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
