import { groq } from 'next-sanity';
import { client, urlFor } from  '../../lib/sanity.client'
import { post } from "../../../typings";



interface Props {
    post: post;
  }
const post = ({post}:Props) => {
    console.log(post)
    return (
        <main>
            
        </main>
    );
}

export default post;


export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await client.fetch(
      groq`*[_type == "post" && defined(slug.current)][]{
        "params": { "slug": slug.current }
      }`
    );
  
    return { paths, fallback: true };
  };


    
   /*
    const query =  groq`
    *[_type == "post" ]{
   _id,
     slug{
     current
     }
 }`

    export const getStaticPaths: GetStaticPaths = async () => {
        const paths = await client.fetch(query)
      
        return { paths, fallback: true };
      };
  
*/
    export async function getStaticProps({params}) {
       const query = groq`
       *[_type == "post" && slug.current == $slug ][0]{
        _id,
          _createdAt,
        title,
        author->{
          name,
          image
        },
          "comments":*[
          _type == "comment" && post._ref ==
          ^._id && approved == true
          ]
        descriptions,
        mainImage,
        slug
      }
       `
       const result = await client.fetch(query,{
        slug: params?.slug,
       })
       if(!result){
        return{
            NotFound: true,
        }}
        return{
            props:{
                result 
            }
        }
       
      }