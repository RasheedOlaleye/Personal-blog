import Image from 'next/image'

const Hero = () => {
    return (
        
            
            <div className=' flex bg-green-400 border-y border-black
             justify-between  py-10 md:py-0 items-center'>
        <div className=" px-10 space-y-5">
          <h1 className=" text-6xl font-serif max-w-xl"> Be Conversant.</h1>
          <h2 className=" space-x-2"> Get to know the latest news in
             <span>technology</span>
             <span>education</span>
             <span>security</span>
             </h2>
        </div>
        <div>
          <Image src='/face.png'
          className='hidden md:inline-flex h-32 mr-4 md:h-full'
          width={400} height={400} />
        </div>
      </div>
        
    );
}

export default Hero;