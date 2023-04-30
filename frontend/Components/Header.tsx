import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

/*export default () => {
    return (
        
        <header className=' flex item-center 
        justify-between space-x-2
          font-bold p-10 py-5'>
            <div className=' flex space-x-2'>
                <Link href='/'>
                <Image src='/vercel.svg'
                width={100}
                height={100}
                className = 'rounded-full'
                alt='vercel'  />
                </Link>
                <h1>Rasheed Olaleye</h1>
            </div>
            <div>
                <Link href='/' 
                className=' px-5 py-3 text-sm md:text-base
                 bg-gray-900 flex items-center text-center rounded-full text-white'>
                    Sign up Now
                 </Link>

            </div>



        </header>
    );
}
*/



/*export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      
      <nav className="w-full bg-gray-800 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="#">
                <h2 className="text-2xl text-white font-bold">NEXT JS</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white">
                  <Link href="/">
                    Home
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/blogs">
                    Blogs
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/about">
                    About US
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/contact">
                    Contact US
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    
    </div>
  );
}


*/
export default () => {
    return (
        
        <header className=' flex justify-between p-6 md:max-w-7xl mx-auto relative  '>
            <div className=' flex space-x-3  items-center'>
                 <Link href=''>
                    <Image src='vercel.svg'
                    className=' w-44 object-contain mr-2 cursor-pointer' 
                    width={100}
                    alt='make'
                    height={100}/>
                 </Link>
                
          
            <div className='hidden md:inline-flex items-center space-x-4'> 
                <h3>About</h3>
                <h3>Contact</h3>
                <h3 className=' text-black bg-green-400 rounded-full py-1 px-5'>Follow</h3>
                </div>

            </div>

            <div className=' flex items-center text-black space-x-6 mr-5'>
                <h3 className='hidden md:inline-flex border-green-400 text border rounded-full py-1 px-3 md:px-5 whitespace-nowrap'>Sign In</h3>
                <h3 className=' whitespace-nowrap text-black 
                outline outline-green-400 rounded-full py-1 px-3 ring-1'>Get Started</h3>
            </div>
            
        </header>
        
    );
}