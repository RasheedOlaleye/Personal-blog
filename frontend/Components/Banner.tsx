import Image from 'next/image'


const Banner = () => {
    return (
        <div className=' flex flex-col lg:flex-row lg:space-x-5
         px-10 py-5 font-bold mb-5 justify-between'>
            <div>
              <h1 className=' text-7xl '>Rasheed Daily`s Blog</h1>
              <h2 className=' mt-5 md:mt-0'>
                Welcome to {""} <span className=' underline decoration-4 decoration-[#58FF33]'>
                developer blog {""}
                </span>
                In Nigeria
              </h2>
            </div>
            <p className=' mt-5 md:mt-2 text-gray-300 max-w-sm'>
                New Products Feature|New Technology|Weekly Debugging...
            </p>
            <div></div>
        </div>
    );
}

export default Banner;