import Hero from "../../Components/Hero";
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { groq } from "next-sanity";
import { client, urlFor } from "../lib/sanity.client";
import { post } from "../../typings";
import Post from "../../Components/Posted";

interface Props {
  posts: post[]
}

const IndexPage = ({ posts }: Props) => {
  return (
    <div className=" ">
      <Head>
        <title>Rasheed Blog Website</title>
      </Head>
      <Hero />
      
      <div className=" grid grid-cols-1 gap-row-4  p-2 md:p-6 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {posts.map((post) => (
          <Link href={`/post/${post.slug.current}`} key={post._id}>
            <div className=" border rounded-lg ml-2 overflow-hidden group cursor-pointer">
              {post.mainImage && (
                <Image
                className=" h-60  object-cover group-hover:scale-105 
                transition-transform duration-100  pr-5 ease-in-out"
                  src={urlFor(post.mainImage).url()!}
                  width={400}
                  height={50}
                  alt={post.title}
                />
              )}
              <div className=" flex space-x-5 bg-white p-5">
                <div className=" ">
                  <p className="text-xl font-bold">{post.title}</p>
                  <p className=" text-sm text-gray-400 font-bold  ">{post.descriptions} by {post.author.name}</p>
                  
                </div>
                
                  <Image src={urlFor(post.author.image).url()} 
                  alt={post.author.image}
                  width={10} height={20}
                  className=" h-10 w-12 rounded-full" />
                
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      
    </div>
  );
};

export default IndexPage;

const query = groq`*[_type == "post"]{
  _id,
  title,
  slug,
  author->{
    name,
    image
  },
  descriptions,
  mainImage,
  slug
}`

export const getServerSideProps = async () => {
  const posts = await client.fetch(query);
  return {
    props: {
      posts,
    },
  };
};