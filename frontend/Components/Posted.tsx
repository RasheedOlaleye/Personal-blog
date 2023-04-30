/*import Image from 'next/image'
import Link from 'next/link'
import { post } from "../typings";

interface Props {
  posts: post[]
}


const Posted = ({ posts }: Props) => {
    return (
       
        <div className='grid grid-rows-2'>
             {posts.map((post) => (
          <Link href={`/post/${post.slug.current}`} key={post._id}>
            <div className=' flex flex-row m-3 md:m-0 items-center border border-yellow-400 md:max-w-3xl md:ml-20'>
            <div className=' grid grid-cols-1 border border-black h-30 md:items-center md:px-6 '>
                <div className='flex space-x-1 flex-row '>
                    <Image src="/face.png"
                    className=' w-8 h-8 p-2'
                    width={100} height={100}
                    alt ='AuthorImage' />
                <span className='text-sm font-semibold md:font-bold md:uppercase w-3/4'>
                 <h5 className='py-1 text-base text-[10px]'>Towards Master Science</h5>
                </span>
                </div>

              <div className=' text-xs w-3/4'>
                <strong className='  p-3 font-bold whitespace-normal md:text-2xl'>{post.title}<br/></strong>
                </div>
                <p className='p-3 text-sm md:text-base text-gray-200'>{post.descriptions}</p>
                <span className=' text-sm px-3 text-gray-100'>{/*time*/}Feb 13</span>

            </div>
            <div className=' border mr-10 border-green-300 '>
                {/*image*/}
                <Image src='/elon.jpg' width={300}
                height ={100} className ='h-[150px] w-[150px]' alt='image' />
            </div>
            </div>
            </Link>
             ))}
        </div>
    );
}

export default Posted;